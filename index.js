module.exports = {
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
		},
		sourceType: 'module',
	},
	env: {
		browser: true,
		jest: true,
		mocha: true,
		node: true,
		es6: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
	plugins: ['no-only-tests', 'compat', 'import', 'react-hooks'],
	rules: {
		camelcase: 'warn',
		curly: ['error', 'all'],
		eqeqeq: 'error',
		'max-len': [
			'error',
			100,
			2,
			{
				ignoreUrls: true,
				ignoreComments: false,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
			},
		],
		'no-console': 'error',
		'no-multi-assign': 'error',
		'no-nested-ternary': 'error',
		'no-unneeded-ternary': 'error',
		'one-var': ['error', { initialized: 'never' }],
		'spaced-comment': ['warn', 'always'],
		'no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
		'no-return-await': 'error',

		// node
		'handle-callback-err': 'warn',
		'no-mixed-requires': 'error',
		'no-new-require': 'error',
		'no-path-concat': 'error',

		// plugins
		'prettier/prettier': 'error',
		'no-only-tests/no-only-tests': 'error',
		'compat/compat': 'error',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'import/no-unresolved': [2, { commonjs: true, amd: true }],
		'import/order': [
			'error',
			{
				'newlines-between': 'ignore',
				groups: ['builtin', 'external', ['internal', 'parent', 'sibling', 'index']],
			},
		],
	},
	settings: {
		react: {
			createClass: 'createReactClass',
			pragma: 'React',
			version: '16.4',
		},
		propWrapperFunctions: ['forbidExtraProps'],
	},
};
