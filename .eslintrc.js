module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier', 'plugin:react/jsx-runtime'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'semi': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'eqeqeq': ['error', 'smart'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
  },
}
