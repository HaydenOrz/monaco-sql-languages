/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import {
	CompletionService,
	diagnosticDefault,
	LanguageServiceDefaults,
	LanguageServiceDefaultsImpl,
	loadLanguage,
	modeConfigurationDefault,
	registerLanguage,
	SupportedModeConfiguration
} from '../_.contribution';
import { languages, IDisposable } from '../fillers/monaco-editor-core';

const languageId = 'hivesql';
let disposables: IDisposable = {
	dispose() {}
};

export function registerHiveSQLLanguage(
	completionService?: CompletionService,
	options?: SupportedModeConfiguration
) {
	registerLanguage({
		id: languageId,
		extensions: ['.hivesql'],
		aliases: ['HiveSQL', 'hive', 'Hive'],
		loader: () => import('./hivesql')
	});

	loadLanguage(languageId);

	const modeConfiguration = typeof options === 'object' ? options : {};

	const defaults: LanguageServiceDefaults = new LanguageServiceDefaultsImpl(
		languageId,
		diagnosticDefault,
		{ ...modeConfigurationDefault, ...modeConfiguration },
		completionService
	);

	languages.onLanguage(languageId, () => {
		import('../setupLanguageMode').then((mode) => {
			disposables.dispose();
			disposables = mode.setupLanguageMode(defaults);
			return disposables;
		});
	});
}
