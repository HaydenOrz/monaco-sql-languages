/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { registerLanguage } from '../_.contribution';
import { setupLanguageFeatures } from '../setupLanguageFeatures';
import { LanguageIdEnum } from '../common/constants';

registerLanguage({
	id: LanguageIdEnum.HIVE,
	extensions: ['.hivesql'],
	aliases: ['HiveSQL', 'hive', 'Hive'],
	loader: () => import('./hivesql')
});

setupLanguageFeatures({
	languageId: LanguageIdEnum.HIVE,
	completionItems: true,
	diagnostics: true
});
