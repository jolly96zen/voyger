// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */
const config = {
  printWidth: 120,
  semi: false,
  trailingComma: "none",
  vueIndentScriptAndStyle: true,
  singleAttributePerLine: true,
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"]
}

export default config
