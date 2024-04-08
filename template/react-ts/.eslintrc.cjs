module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:storybook/recommended",
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', '@stylistic/js'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "no-unused-labels": "error",
        "no-unused-expressions": "error",
        "no-fallthrough": "error",
        "react-hooks/exhaustive-deps": "off",
        '@stylistic/js/indent': ['error', 4, { "SwitchCase": 1 }],
        '@stylistic/js/quotes': ["error", "single"],
        '@stylistic/js/comma-style': ["error", "last"],
        '@stylistic/js/brace-style': "error",
        '@stylistic/js/semi': "error"
    },
}
