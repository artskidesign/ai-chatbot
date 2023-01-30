const { join } = require('node:path');

module.exports = {
    root: true,
    env: { es6: true },
    extends: [
        'eslint:recommended',
        'next/core-web-vitals',
        'plugin:prettier/recommended',
        'plugin:unicorn/recommended',
    ],
    plugins: ['simple-import-sort', 'unicorn', '@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 12,
        project: [join(__dirname, './tsconfig.json')],
        sourceType: 'module',
    },
    rules: {
        eqeqeq: ['error', 'always'],
        semi: ['error', 'always'],
        quotes: ['error', 'single', { avoidEscape: true }],
        'eol-last': ['error', 'always'],
        'no-console': 'error',
        'no-unused-vars': ['error', { ignoreRestSiblings: true }],
        'react/prop-types': 0,
        'prettier/prettier': 'error',
        'linebreak-style': ['error', 'unix'],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'import/no-duplicates': 'error', // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-duplicates.md
        'jsx-a11y/alt-text': 'error', // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md
        'padding-line-between-statements': [
            // https://eslint.org/docs/latest/rules/padding-line-between-statements
            'error',
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: 'import', next: '*' },
            { blankLine: 'any', prev: 'import', next: 'import' },
        ],
        'unicorn/filename-case': [
            'error',
            { cases: { camelCase: true, pascalCase: true }, ignore: [/^not-found\.tsx$/] },
        ],
        'unicorn/no-null': 'off',
    },
    overrides: [
        {
            files: ['**/*.js'],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 0,
                '@typescript/no-var-requires': 0,
                'unicorn/prefer-module': 'off',
                'unicorn/no-array-push-push': 'off',
                'unicorn/no-null': 'off',
            },
        },
        {
            files: ['**/*.{ts,tsx}'],
            extends: [
                'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
            ],
            parserOptions: {
                project: [join(__dirname, './tsconfig.json')],
            },
            rules: {
                'no-unused-vars': 'off',
                '@typescript-eslint/consistent-type-definitions': 'error', // https://typescript-eslint.io/rules/consistent-type-definitions/
                '@typescript-eslint/default-param-last': 'error', // https://typescript-eslint.io/rules/default-param-last/
                '@typescript-eslint/consistent-type-exports': 'error', // https://typescript-eslint.io/rules/consistent-type-exports/
                '@typescript-eslint/consistent-type-imports': 'error', // https://typescript-eslint.io/rules/consistent-type-imports/
                '@typescript-eslint/no-base-to-string': 'error', // https://typescript-eslint.io/rules/no-base-to-string/
                '@typescript-eslint/no-confusing-non-null-assertion': 'error', // https://typescript-eslint.io/rules/no-confusing-non-null-assertion/
                '@typescript-eslint/no-dynamic-delete': 'error', // https://typescript-eslint.io/rules/no-dynamic-delete/
                'no-implied-eval': 'off',
                '@typescript-eslint/no-implied-eval': 'error', // https://typescript-eslint.io/rules/no-implied-eval/
                '@typescript-eslint/no-invalid-void-type': 'error', // https://typescript-eslint.io/rules/no-invalid-void-type/
                '@typescript-eslint/no-meaningless-void-operator': 'error', // https://typescript-eslint.io/rules/no-meaningless-void-operator/
                '@typescript-eslint/no-redundant-type-constituents': 'error', // https://typescript-eslint.io/rules/no-redundant-type-constituents/
                '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
                '@typescript-eslint/prefer-string-starts-ends-with': 'error', // https://typescript-eslint.io/rules/prefer-string-starts-ends-with/
                '@typescript-eslint/restrict-plus-operands': [
                    'error',
                    { allowAny: true, checkCompoundAssignments: true },
                ], // https://typescript-eslint.io/rules/restrict-plus-operands/
                '@typescript-eslint/unified-signatures': 'error', // https://typescript-eslint.io/rules/unified-signatures/
                /* Naming convention */

                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        // default configuration
                        selector: ['default'],
                        format: ['camelCase'],
                    },
                    {
                        selector: ['variable'],
                        format: ['PascalCase'],
                        types: ['boolean'],
                        prefix: ['is', 'are', 'should', 'has', 'have', 'can', 'did', 'will'],
                    },
                    {
                        selector: ['variable', 'function'],
                        format: ['camelCase', 'PascalCase'],
                        types: ['function'],
                    },
                    {
                        selector: ['variable'],
                        format: ['UPPER_CASE'],
                        modifiers: ['const', 'global'],
                    },
                    {
                        selector: ['variable'],
                        format: ['UPPER_CASE'],
                        types: ['boolean'],
                        modifiers: ['const', 'global'],
                        prefix: ['IS_', 'ARE_', 'SHOULD_', 'HAS_', 'HAVE_', 'CAN_', 'DID_', 'WILL_'],
                    },
                    {
                        selector: ['function'],
                        format: ['camelCase', 'PascalCase'],
                        types: ['function'],
                        modifiers: ['const', 'global'],
                    },
                    {
                        selector: ['typeLike'],
                        format: ['PascalCase'],
                    },
                    {
                        selector: ['enum'],
                        format: ['PascalCase'],
                    },
                    {
                        selector: ['enumMember'],
                        format: ['PascalCase'],
                    },
                    {
                        selector: ['typeProperty', 'objectLiteralProperty'],
                        format: ['camelCase', 'snake_case'],
                    },
                    {
                        selector: ['variable', 'function', 'parameter'],
                        format: ['camelCase', 'PascalCase'],
                        filter: {
                            regex: '(Component)$',
                            match: true,
                        },
                    },
                ],
            },
        },
        {
            files: ['*.json'],
            rules: {
                quotes: ['error', 'double'],
            },
        },
    ],
    settings: {
        next: {
            rootDir: './',
        },
        react: {
            version: 'detect',
        },
    },
};
