import {
	editor,
	Uri,
	IDisposable,
	MarkerSeverity,
	Range,
	languages,
	Position,
	CancellationToken
} from './fillers/monaco-editor-core';
import { debounce } from './common/utils';
import type { Suggestions, ParserError } from 'dt-sql-parser';
import type { LanguageServiceDefaults, CompletionService, ICompletionItem } from './_.contribution';

export interface WorkerAccessor<T> {
	(first: Uri, ...more: Uri[]): Promise<T>;
}

export interface IWorker extends ILanguageWorkerWithCompletions {
	doValidation(uri: string): Promise<ParserError[]>;
	valid(code: string): Promise<ParserError[]>;
	parserTreeToString(code: string): Promise<ParserError[]>;
}

export interface ILanguageWorkerWithCompletions {
	doComplete(uri: string, position: Position): Promise<Suggestions | null>;
}

export class DiagnosticsAdapter<T extends IWorker> {
	private _disposables: IDisposable[] = [];
	private _listener: { [uri: string]: IDisposable } = Object.create(null);

	constructor(
		private _languageId: string,
		private _worker: WorkerAccessor<T>,
		defaults: LanguageServiceDefaults
	) {
		const onModelAdd = (model: editor.IModel): void => {
			let modeId = model.getLanguageId();
			if (modeId !== this._languageId) {
				return;
			}

			this._listener[model.uri.toString()] = model.onDidChangeContent(
				debounce(() => {
					this._doValidate(model.uri, modeId);
				}, 600)
			);

			this._doValidate(model.uri, modeId);
		};

		const onModelRemoved = (model: editor.IModel): void => {
			editor.setModelMarkers(model, this._languageId, []);

			let uriStr = model.uri.toString();
			let listener = this._listener[uriStr];
			if (listener) {
				listener.dispose();
				delete this._listener[uriStr];
			}
		};

		this._disposables.push(editor.onDidCreateModel(onModelAdd));
		this._disposables.push(editor.onWillDisposeModel(onModelRemoved));
		this._disposables.push(
			editor.onDidChangeModelLanguage((event) => {
				onModelRemoved(event.model);
				onModelAdd(event.model);
			})
		);

		defaults.onDidChange((_) => {
			editor.getModels().forEach((model) => {
				if (model.getLanguageId() === this._languageId) {
					onModelRemoved(model);
					onModelAdd(model);
				}
			});
		});

		this._disposables.push({
			dispose: () => {
				for (let key in this._listener) {
					this._listener[key].dispose();
				}
			}
		});

		editor.getModels().forEach(onModelAdd);
	}

	public dispose(): void {
		this._disposables.forEach((d) => d && d.dispose());
		this._disposables = [];
	}

	private _doValidate(resource: Uri, languageId: string): void {
		this._worker(resource)
			.then((worker) => {
				return worker.doValidation(editor.getModel(resource)?.getValue() || '');
			})
			.then((diagnostics) => {
				const markers = diagnostics.map((d) => toDiagnostics(resource, d));
				let model = editor.getModel(resource);
				if (model && model.getLanguageId() === languageId) {
					editor.setModelMarkers(model, languageId, markers);
				}
			})
			.then(undefined, (err) => {
				console.error(err);
			});
	}
}

function toSeverity(lsSeverity: number): MarkerSeverity {
	switch (lsSeverity) {
		default:
			return MarkerSeverity.Error;
	}
}

/**
 * TODO: diag is actually a type ParserError
 * @see {@link ParserError}
 */
function toDiagnostics(resource: Uri, diag: any): editor.IMarkerData {
	let code = typeof diag.code === 'number' ? String(diag.code) : <string>diag.code;

	return {
		severity: toSeverity(diag.severity),
		startLineNumber: diag.startLine,
		startColumn: diag.startCol + 1,
		endLineNumber: diag.endLine,
		endColumn: diag.endCol + 1,
		message: diag.message,
		code: code,
		source: diag.source
	};
}

export class CompletionAdapter<T extends IWorker> implements languages.CompletionItemProvider {
	constructor(private readonly _worker: WorkerAccessor<T>, defaults: LanguageServiceDefaults) {
		this._defaults = defaults;
	}

	private _defaults: LanguageServiceDefaults;

	public get triggerCharacters(): string[] {
		return ['.', ' '];
	}

	provideCompletionItems(
		model: editor.IReadOnlyModel,
		position: Position,
		context: languages.CompletionContext,
		token: CancellationToken
	): Promise<languages.CompletionList | undefined> {
		const resource = model.uri;
		return this._worker(resource)
			.then((worker) => {
				return worker.doComplete(editor.getModel(resource)?.getValue() || '', position);
			})
			.then((suggestions) => {
				const completionService =
					this._defaults.completionService ?? defaultCompletionService;
				return completionService(model, position, context, suggestions);
			})
			.then((completions) => {
				const wordInfo = model.getWordUntilPosition(position);
				const wordRange = new Range(
					position.lineNumber,
					wordInfo.startColumn,
					position.lineNumber,
					wordInfo.endColumn
				);

				const completionItems: languages.CompletionItem[] = completions.map((item) => ({
					...item,
					insertText:
						item.insertText ??
						(typeof item.label === 'string' ? item.label : item.label.label),
					range: item.range ?? wordRange,
					insertTextRules:
						item.insertTextRules ??
						languages.CompletionItemInsertTextRule.InsertAsSnippet
				}));

				return {
					suggestions: completionItems
				};
			});
	}
}

/**
 * A built-in completion service.
 * It will invoke when there is no external completionService.
 * It will only build completion items of keywords.
 */
const defaultCompletionService: CompletionService = function (
	_model,
	_position,
	_context,
	suggestions
) {
	if (!suggestions) {
		return Promise.resolve([]);
	}
	const { keywords } = suggestions;

	const keywordsCompletionItems: ICompletionItem[] = keywords.map((kw) => ({
		label: kw,
		kind: languages.CompletionItemKind.Keyword,
		detail: '关键字'
	}));

	return Promise.resolve(keywordsCompletionItems);
};
