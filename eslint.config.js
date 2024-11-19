import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    ignores: ['.git', '.yarn', 'node-modules'],
  },
  stylistic.configs['recommended-flat'],
]
