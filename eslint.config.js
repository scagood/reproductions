import sonarjs from 'eslint-plugin-sonarjs';

/**
 * @returns {import('eslint').Linter.FlatConfig[]}
 */
export default [
  {
    name: 'sonarjs/recommended',
    plugins: { sonarjs },
    rules: {
      ...sonarjs.configs.recommended.rules,
      'sonarjs/cognitive-complexity': 'error',
      'sonarjs/no-duplicate-string': 'off',
    },
  },
];
