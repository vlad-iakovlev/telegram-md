/** @type {import("prettier").Config} */
const prettierConfig = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  semi: false,
  singleQuote: true,
  importOrder: ['^\\.\\./', '^\\./'],
  importOrderSortSpecifiers: true,
}

export default prettierConfig
