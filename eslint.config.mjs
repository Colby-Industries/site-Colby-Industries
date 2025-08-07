import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next', 'next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'all',
          semi: false,
          tabWidth: 2,
          singleQuote: true,
          printWidth: 120,
          endOfLine: 'auto',
          arrowParens: 'always',
        },
        {
          usePrettierrc: false,
        },
      ],
      'react/react-in-jsx-scope': 'off',
    },
  }),
]

export default eslintConfig
