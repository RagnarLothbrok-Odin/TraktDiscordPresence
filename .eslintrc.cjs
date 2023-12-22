module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        require.resolve("eslint-config-airbnb/base"),
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'quotes': ['error', 'single'],
        'object-curly-spacing': ['error', 'always'],
        'import/prefer-default-export': 'off',
        'indent': ['error', 4],
        'no-console': 'off',
        'max-len': [
            'error',
            {
                ignoreComments: true,
                code: 150,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true
            }
        ],
        'class-methods-use-this': 'off',
        'no-inner-declarations': 'off',
        'import/extensions': 'off',
        'consistent-return': 'off',
        'import/no-unresolved': 'off',
        'no-nested-ternary': 'off',
        'no-unused-expressions': 'off',
        'max-classes-per-file': 'off',
        'no-use-before-define': 'off',
        'no-throw-literal': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
    },
};
