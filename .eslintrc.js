module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/jsx-runtime',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 13,
		sourceType: 'module',
	},
	ignorePatterns: ['**/*.css', '**/*.svg'],
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'@typescript-eslint/no-non-null-assertion': 'off',
		'no-prototype-builtins': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	overrides: [
		{
			files: ['.eslintrc.js'],
			env: {
				node: true,
			},
		},
	],
};
