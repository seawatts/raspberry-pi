// NOTE: I prefer using a JavaScript file for the .eslintrc file (instead of a JSON file) as it supports comments that can be used to better describe rules.
module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['@typescript-eslint', 'prettier', 'jest', 'jest-formatting', 'sort-class-members'],
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:jest/recommended',
  ],
  parserOptions: {
    sourceType: 'module', // Allows for the use of imports
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    'jest/globals': true,
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    'sort-class-members/sort-class-members': [
      2,
      {
        order: [
          '[static-properties]',
          '[static-methods]',
          '[properties]',
          '[conventional-private-properties]',
          'constructor',
          '[methods]',
          '[conventional-private-methods]',
        ],
        accessorPairPositioning: 'getThenSet',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'jest/expect-expect': 'error',
    'jest-formatting/padding-before-test-blocks': 2,
    'jest-formatting/padding-before-describe-blocks': 2,
    'lines-between-class-members': 'error',
    'no-shadow': 'error',
  },
};
