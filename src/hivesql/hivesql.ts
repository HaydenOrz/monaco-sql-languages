/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import type { languages } from '../fillers/monaco-editor-core';
import { tokenClassConsts } from '../common/constants';

export const conf: languages.LanguageConfiguration = {
	comments: {
		lineComment: '--',
		blockComment: ['/*', '*/']
	},
	brackets: [
		['[', ']'],
		['(', ')']
	],
	autoClosingPairs: [
		{ open: '[', close: ']' },
		{ open: '(', close: ')' },
		{ open: '"', close: '"' },
		{ open: "'", close: "'" },
		{ open: '`', close: '`' }
	],
	surroundingPairs: [
		{ open: '[', close: ']' },
		{ open: '(', close: ')' },
		{ open: '"', close: '"' },
		{ open: "'", close: "'" },
		{ open: '`', close: '`' }
	]
};

export const language = <languages.IMonarchLanguage>{
	defaultToken: '',
	tokenPostfix: '.sql',
	ignoreCase: true,
	brackets: [
		{ open: '[', close: ']', token: tokenClassConsts.DELIMITER_SQUARE },
		{ open: '(', close: ')', token: tokenClassConsts.DELIMITER_PAREN }
	],
	keywords: [
		'ABORT',
		'ACTIVATE',
		'ACTIVE',
		'ADD',
		'ADMIN',
		'AFTER',
		'ALL',
		'ALLOC_FRACTION',
		'ALTER',
		'ANALYZE',
		'AND',
		'ANTI',
		'ANY',
		'APPLICATION',
		'ARCHIVE',
		'ARRAY',
		'AS',
		'ASC',
		'AST',
		'AT',
		'AUTHORIZATION',
		'AUTOCOMMIT',
		'BATCH',
		'BEFORE',
		'BETWEEN',
		'BIGINT',
		'BINARY',
		'BOOLEAN',
		'BOTH',
		'BUCKET',
		'BUCKETS',
		'BY',
		'CACHE',
		'CASCADE',
		'CASE',
		'CAST',
		'CBO',
		'CHANGE',
		'CHAR',
		'CHECK',
		'CLUSTER',
		'CLUSTERED',
		'CLUSTERSTATUS',
		'COLLECTION',
		'COLUMN',
		'COLUMNS',
		'COMMENT',
		'COMMIT',
		'COMPACT',
		'COMPACTIONS',
		'COMPACTIONID',
		'COMPUTE',
		'CONCATENATE',
		'CONF',
		'CONSTRAINT',
		'CONTINUE',
		'COST',
		'CREATE',
		'CRON',
		'CROSS',
		'CUBE',
		'CURRENT',
		'CURRENT_DATE',
		'CURRENT_TIMESTAMP',
		'CURSOR',
		'DATA',
		'DATABASE',
		'DATABASES',
		'CONNECTOR',
		'CONNECTORS',
		'DATE',
		'DATETIME',
		'DAY',
		'DAYS',
		'DAYOFWEEK',
		'DBPROPERTIES',
		'DCPROPERTIES',
		'DDL',
		'DEBUG',
		'DEC',
		'DECIMAL',
		'NUMERIC',
		'DEFAULT',
		'DEFERRED',
		'DEFINED',
		'DELETE',
		'DELIMITED',
		'DEPENDENCY',
		'DESC',
		'DESCRIBE',
		'DETAIL',
		'DIRECTORIES',
		'DIRECTORY',
		'DISABLE',
		'DISABLED',
		'DISTINCT',
		'DISTRIBUTE',
		'DISTRIBUTED',
		'DO',
		'DOUBLE',
		'DROP',
		'RECOVER',
		'DUMP',
		'$ELEM$',
		'ELSE',
		'ENABLE',
		'ENABLED',
		'END',
		'ENFORCED',
		'ESCAPED',
		'EVERY',
		'EXCEPT',
		'EXCHANGE',
		'EXCLUSIVE',
		'EXECUTE',
		'EXECUTED',
		'EXISTS',
		'EXPIRE_SNAPSHOTS',
		'EXPLAIN',
		'EXPORT',
		'EXPRESSION',
		'EXTENDED',
		'EXTERNAL',
		'EXTRACT',
		'FALSE',
		'FETCH',
		'FIELDS',
		'FILE',
		'FILEFORMAT',
		'FIRST',
		'FLOAT',
		'FLOOR',
		'FOLLOWING',
		'FOR',
		'FORCE',
		'FOREIGN',
		'FORMAT',
		'FORMATTED',
		'FROM',
		'FULL',
		'FUNCTION',
		'FUNCTIONS',
		'GRANT',
		'GROUP',
		'GROUPING',
		'HAVING',
		'HOLD_DDLTIME',
		'HOUR',
		'HOURS',
		'IDXPROPERTIES',
		'IF',
		'IGNORE',
		'IMPORT',
		'IN',
		'INDEX',
		'INDEXES',
		'INNER',
		'INPATH',
		'INPUTDRIVER',
		'INPUTFORMAT',
		'INSERT',
		'INT',
		'INTEGER',
		'INTERSECT',
		'INTERVAL',
		'INTO',
		'IS',
		'ISOLATION',
		'ITEMS',
		'JAR',
		'JOIN',
		'JOINCOST',
		'KEY',
		'KEYS',
		'$KEY$',
		'KILL',
		'LAST',
		'LATERAL',
		'LEADING',
		'LEFT',
		'LESS',
		'LEVEL',
		'LIKE',
		'LIMIT',
		'LINES',
		'LOAD',
		'LOCAL',
		'LOCATION',
		'LOCK',
		'LOCKS',
		'LOGICAL',
		'LONG',
		'MACRO',
		'MANAGED',
		'MANAGEDLOCATION',
		'MANAGEMENT',
		'MAP',
		'MAPJOIN',
		'MAPPING',
		'MATCHED',
		'MATERIALIZED',
		'MERGE',
		'METADATA',
		'MINUS',
		'MINUTE',
		'MINUTES',
		'MONTH',
		'MONTHS',
		'MORE',
		'MOVE',
		'MSCK',
		'NONE',
		'NORELY',
		'NOSCAN',
		'NOT',
		'NOVALIDATE',
		'NO_DROP',
		'NULL',
		'NULLS',
		'OF',
		'OFFLINE',
		'OFFSET',
		'ON',
		'ONLY',
		'OPERATOR',
		'OPTION',
		'OR',
		'ORDER',
		'OUT',
		'OUTER',
		'OUTPUTDRIVER',
		'OUTPUTFORMAT',
		'OVER',
		'OVERWRITE',
		'OWNER',
		'PARTITION',
		'PARTITIONED',
		'PARTITIONS',
		'PATH',
		'PERCENT',
		'PKFK_JOIN',
		'PLAN',
		'PLANS',
		'PLUS',
		'POOL',
		'PRECEDING',
		'PRECISION',
		'PREPARE',
		'PRESERVE',
		'PRIMARY',
		'PRINCIPALS',
		'PROCEDURE',
		'PROTECTION',
		'PURGE',
		'QUALIFY',
		'QUARTER',
		'QUERY',
		'QUERY_PARALLELISM',
		'RANGE',
		'READ',
		'READONLY',
		'READS',
		'REAL',
		'REBUILD',
		'RECORDREADER',
		'RECORDWRITER',
		'REDUCE',
		'REFERENCES',
		'REGEXP',
		'RELOAD',
		'RELY',
		'REMOTE',
		'RENAME',
		'REOPTIMIZATION',
		'REPAIR',
		'REPL',
		'REPLACE',
		'REPLICATION',
		'RESOURCE',
		'RESPECT',
		'RESTRICT',
		'REVOKE',
		'REWRITE',
		'RIGHT',
		'RLIKE',
		'ROLE',
		'ROLES',
		'ROLLBACK',
		'ROLLUP',
		'ROW',
		'ROWS',
		'SCHEDULED',
		'SCHEDULING_POLICY',
		'SCHEMA',
		'SCHEMAS',
		'SECOND',
		'SECONDS',
		'SELECT',
		'SEMI',
		'SERDE',
		'SERDEPROPERTIES',
		'SERVER',
		'SET',
		'SETS',
		'SET_CURRENT_SNAPSHOT',
		'SHARED',
		'SHOW',
		'SHOW_DATABASE',
		'SKEWED',
		'SMALLINT',
		'SNAPSHOT',
		'SOME',
		'SORT',
		'SORTED',
		'SPEC',
		'SSL',
		'START',
		'STATISTICS',
		'STATUS',
		'STORED',
		'STREAMTABLE',
		'STRING',
		'STRUCT',
		'SUMMARY',
		'SYNC',
		'SYSTEM_TIME',
		'SYSTEM_VERSION',
		'TABLE',
		'TABLES',
		'TABLESAMPLE',
		'TBLPROPERTIES',
		'TEMPORARY',
		'TERMINATED',
		'THEN',
		'TIME',
		'TIMESTAMP',
		'TIMESTAMPLOCALTZ',
		'TIMESTAMPTZ',
		'TINYINT',
		'TO',
		'TOUCH',
		'TRAILING',
		'TRANSACTION',
		'TRANSACTIONAL',
		'TRANSACTIONS',
		'TRANSFORM',
		'TRIGGER',
		'TRIM',
		'TRUE',
		'TRUNCATE',
		'TYPE',
		'UNARCHIVE',
		'UNBOUNDED',
		'UNDO',
		'UNION',
		'UNIONTYPE',
		'UNIQUE',
		'UNIQUEJOIN',
		'UNKNOWN',
		'UNLOCK',
		'UNMANAGED',
		'UNSET',
		'UNSIGNED',
		'UPDATE',
		'URI',
		'URL',
		'USE',
		'USER',
		'USING',
		'UTC',
		'UTC_TMESTAMP',
		'VALIDATE',
		'VALUES',
		'$VALUE$',
		'VARCHAR',
		'VECTORIZATION',
		'VIEW',
		'VIEWS',
		'WAIT',
		'WEEK',
		'WEEKS',
		'WHEN',
		'WHERE',
		'WHILE',
		'WINDOW',
		'WITH',
		'WITHIN',
		'WORK',
		'WORKLOAD',
		'WRITE',
		'YEAR',
		'YEARS',
		'ZONE'
	],
	operators: [
		// https://cwiki.apache.org/confluence/display/Hive/LanguageManual+UDF#LanguageManualUDF-Built-inOperators
		// Relational Operators
		'BETWEEN',
		'IS',
		'LIKE',
		'RLIKE',
		'REGEXP',
		// Arithmetic Operators
		'DIV',
		// Logical Operators
		'NOT',
		'AND',
		'OR',
		'NOT',
		'IN',
		'EXISTS',
		// join https://cwiki.apache.org/confluence/display/Hive/LanguageManual+Joins#LanguageManualJoins-JoinSyntax
		'JOIN',
		'INNER',
		'OUTER',
		'LEFT',
		'RIGHT',
		'FULL',
		'CROSS',
		'SEMI',
		// Set
		'EXCEPT',
		'INTERSECT',
		'UNION'
	],
	builtinFunctions: [
		// https://cwiki.apache.org/confluence/display/Hive/LanguageManual+UDF#LanguageManualUDF-Built-inFunctions
		// Mathematical Functions
		'ROUND',
		'BROUND',
		'FLOOR',
		'CEIL',
		'RAND',
		'EXP',
		'LN',
		'LOG10',
		'LOG2',
		'LOG',
		'POW',
		'POWER',
		'SQRT',
		'BIN',
		'HEX',
		'UNHEX',
		'CONV',
		'ABS',
		'PMOD',
		'SIN',
		'ASIN',
		'COS',
		'ACOS',
		'TAN',
		'ATAN',
		'DEGREES',
		'RADIANS',
		'POSITIVE',
		'NEGATIVE',
		'SIGN',
		'E',
		'PI',
		'FACTORIAL',
		'CBRT',
		'SHIFTLEFT',
		'SHIFTRIGHT',
		'GREATEST',
		'LEAST',
		'WIDTH_BUCKET',
		// Collection Functions
		'SIZE',
		'MAP_KEYS',
		'MAP_VALUES',
		'ARRAY_CONTAINS',
		'SORT_ARRAY',
		// Type Conversion Functions
		'BINARY',
		'CAST',
		// Date Functions
		'FROM_UNIXTIME',
		'UNIX_TIMESTAMP',
		'TO_DATE',
		'YEAR',
		'QUARTER',
		'MONTH',
		'DAY',
		'HOUR',
		'MINUTE',
		'SECOND',
		'WEEKOFYEAR',
		'EXTRACT',
		'DATEDIFF',
		'DATE_ADD',
		'DATE_SUB',
		'FROM_UTC_TIMESTAMP',
		'TO_UTC_TIMESTAMP',
		'CURRENT_DATE',
		'CURRENT_TIMESTAMP',
		'ADD_MONTHS',
		'LAST_DAY',
		'NEXT_DAY',
		'TRUNC',
		'MONTHS_BETWEEN',
		'DATE_FORMAT',
		// Conditional Functions
		'ASSERT_TRUE',
		'COALESCE',
		'ISNOTNULL',
		'ISNULL',
		'NULLIF',
		'NVL',
		// String Functions
		'ASCII',
		'BASE64',
		'CHARACTER_LENGTH',
		'CHR',
		'CONCAT',
		'CONTEXT_NGRAMS',
		'CONCAT_WS',
		'DECODE',
		'ELT',
		'ENCODE',
		'FIELD',
		'FIND_IN_SET',
		'FORMAT_NUMBER',
		'GET_JSON_OBJECT',
		'IN_FILE',
		'INSTR',
		'LENGTH',
		'LOCATE',
		'LOWER',
		'LPAD',
		'LTRIM',
		'NGRAMS',
		'OCTET_LENGTH',
		'PARSE_URL',
		'PRINTF',
		'QUOTE',
		'REGEXP_EXTRACT',
		'REGEXP_REPLACE',
		'REPEAT',
		'REPLACE',
		'REVERSE',
		'RPAD',
		'RTRIM',
		'SENTENCES',
		'SPACE',
		'SPLIT',
		'STR_TO_MAP',
		'SUBSTR',
		'SUBSTRING',
		'SUBSTRING_INDEX',
		'TRANSLATE',
		'TRIM',
		'UNBASE64',
		'UPPER',
		'INITCAP',
		'LEVENSHTEIN',
		'SOUNDEX',
		// Data Masking Functions
		'MASK',
		'MASK_FIRST_N',
		'MASK_LAST_N',
		'MASK_SHOW_FIRST_N',
		'MASK_SHOW_LAST_N',
		'MASK_HASH',
		// Misc. Functions
		'JAVA_METHOD',
		'REFLECT',
		'HASH',
		'CURRENT_USER',
		'LOGGED_IN_USER',
		'CURRENT_DATABASE',
		'MD5',
		'SHA1',
		'SHA',
		'CRC32',
		'SHA2',
		'AES_ENCRYPT',
		'VERSION',
		'SURROGATE_KEY',
		// Built-in Aggregate Functions (UDAF)
		'COUNT',
		'SUM',
		'AVG',
		'MIN',
		'MAX',
		'VARIANCE',
		'VAR_POP',
		'VAR_SAMP',
		'STDDEV_POP',
		'STDDEV_SAMP',
		'COVAR_POP',
		'COVAR_SAMP',
		'CORR',
		'PERCENTILE',
		'PERCENTILE_APPROX',
		'REGR_AVGX',
		'REGR_AVGY',
		'REGR_COUNT',
		'REGR_INTERCEPT',
		'REGR_R2',
		'REGR_SLOPE',
		'REGR_SXX',
		'REGR_SXY',
		'REGR_SYY',
		'HISTOGRAM_NUMERIC',
		'COLLECT_SET',
		'COLLECT_LIST',
		'NTILE',
		// Built-in Table-Generating Functions (UDTF)
		'EXPLODE',
		'POSEXPLODE',
		'INLINE',
		'STACK',
		'JSON_TUPLE',
		'PARSE_URL_TUPLE'
	],
	builtinVariables: [
		// Not support
	],
	typeKeywords: [
		// https://cwiki.apache.org/confluence/display/Hive/LanguageManual+Types#LanguageManualTypes
		// Numeric Types
		'TINYINT',
		'SMALLINT',
		'INT',
		'INTEGER',
		'BIGINT',
		'FLOAT',
		'DOUBLE',
		'DECIMAL',
		'NUMERIC',
		// Date/Time Types
		'TIMESTAMP',
		'DATE',
		'INTERVAL',
		// String Types
		'STRING',
		'VARCHAR',
		'CHAR',
		// Misc Types
		'BOOLEAN',
		'BINARY',
		// Complex Types
		'ARRAY',
		'MAP',
		'STRUCT',
		'UNIONTYPE'
	],
	pseudoColumns: [
		// Not support
	],
	tokenizer: {
		root: [
			{ include: '@comments' },
			{ include: '@whitespace' },
			{ include: '@pseudoColumns' },
			{ include: '@numbers' },
			{ include: '@strings' },
			{ include: '@complexIdentifiers' },
			{ include: '@scopes' },
			{ include: '@complexDataTypes' },
			[/[;,.]/, tokenClassConsts.DELIMITER],
			[/[\(\)\[\]]/, '@brackets'],
			[
				/[\w@#$]+/,
				{
					cases: {
						'@operators': tokenClassConsts.OPERATOR_KEYWORD,
						'@typeKeywords': tokenClassConsts.TYPE,
						'@builtinVariables': tokenClassConsts.VARIABLE,
						'@builtinFunctions': tokenClassConsts.PREDEFINED,
						'@keywords': tokenClassConsts.KEYWORD,
						'@default': tokenClassConsts.IDENTIFIER
					}
				}
			],
			[/[<>=!%&+\-*/|~^]/, tokenClassConsts.OPERATOR_SYMBOL]
		],
		whitespace: [[/[\s\t\r\n]+/, tokenClassConsts.WHITE]],
		comments: [
			[/--+.*/, tokenClassConsts.COMMENT],
			[/\/\*/, { token: tokenClassConsts.COMMENT_QUOTE, next: '@comment' }]
		],
		comment: [
			[/[^*/]+/, tokenClassConsts.COMMENT],
			// [/\/\*/, { token: 'comment.quote', next: '@push' }],    // nested comment not allowed :-(
			[/\*\//, { token: tokenClassConsts.COMMENT_QUOTE, next: '@pop' }],
			[/./, tokenClassConsts.COMMENT]
		],
		pseudoColumns: [
			[
				/[$][A-Za-z_][\w@#$]*/,
				{
					cases: {
						'@pseudoColumns': tokenClassConsts.PREDEFINED,
						'@default': tokenClassConsts.IDENTIFIER
					}
				}
			]
		],
		numbers: [
			[/0[xX][0-9a-fA-F]*/, tokenClassConsts.NUMBER_HEX],
			[/[$][+-]*\d*(\.\d*)?/, tokenClassConsts.NUMBER],
			[/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, tokenClassConsts.NUMBER]
		],
		strings: [
			// https://cwiki.apache.org/confluence/display/Hive/Literals
			[/'/, { token: tokenClassConsts.STRING, next: '@string_single' }],
			[/"/, { token: tokenClassConsts.STRING, next: '@string_double' }]
		],
		string_single: [
			[/[^']+/, tokenClassConsts.STRING_ESCAPE],
			[/''/, tokenClassConsts.STRING],
			[/'/, { token: tokenClassConsts.STRING, next: '@pop' }]
		],
		string_double: [
			[/[^"]+/, tokenClassConsts.STRING_ESCAPE],
			[/""/, tokenClassConsts.STRING],
			[/"/, { token: tokenClassConsts.STRING, next: '@pop' }]
		],
		complexIdentifiers: [
			[/`/, { token: tokenClassConsts.IDENTIFIER_QUOTE, next: '@quotedIdentifier' }]
		],
		quotedIdentifier: [
			[/[^`]+/, tokenClassConsts.IDENTIFIER_QUOTE],
			[/``/, tokenClassConsts.IDENTIFIER_QUOTE],
			[/`/, { token: tokenClassConsts.IDENTIFIER_QUOTE, next: '@pop' }]
		],
		scopes: [
			// Not Support
		],
		complexDataTypes: [[/DOUBLE\s+PRECISION\b/i, { token: tokenClassConsts.TYPE }]]
	}
};
