module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'no-alert': 'error',
    'no-await-in-loop': 'warn',
    'no-compare-neg-zero': 'warn',
    'no-console': 'warn',
    'no-magic-numbers': 'warn',
    'no-process-env': 'off',
    'no-var': 'warn',
    'prettier/prettier': 0,
    semi: [2, 'never'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    "react-hooks/exhaustive-deps": 'warn'
  },
}
