/** @type {import("prettier").Config} */
const prettierConfig = {
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-packagejson',
  ],
  semi: false,
  singleQuote: true,
  importOrder: ['^\\.\\./', '^\\./'],
  importOrderSortSpecifiers: true,
}

export default prettierConfig
