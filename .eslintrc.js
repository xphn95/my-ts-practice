const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:jsonc/recommended-with-jsonc'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  rules: {
    'no-multiple-empty-lines': [2, {
      max: 1,
      maxEOF: 0
    }],
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/consistent-type-definitions': 0,
    '@typescript-eslint/indent': ['error', 2, {
      SwitchCase: 1,
      flatTernaryExpressions: false,
      ignoredNodes: [
        'PropertyDefinition[decorators]',
        'TSUnionType',
        'FunctionExpression[params]:has(Identifier[decorators])'
      ]
    }]
  }
})
