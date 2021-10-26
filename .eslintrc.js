module.exports = {
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        'cypress/globals': true,
    },
    plugins: ['simple-import-sort', 'cypress'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:security/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@next/next/recommended',
    ],
    rules: {
        'no-console': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'react/no-unescaped-entities': 'off',
        'cypress/no-assigning-return-values': 'error',
        'cypress/no-unnecessary-waiting': 'error',
        'cypress/assertion-before-screenshot': 'warn',
        'cypress/no-force': 'warn',
        'cypress/no-async-tests': 'error',
        'jsx-a11y/no-onchange': 'off',
    },
};
