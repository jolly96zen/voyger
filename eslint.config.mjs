// @ts-check
import eslintConfigPrettier from "eslint-config-prettier"
import withNuxt from "./.nuxt/eslint.config.mjs"

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      ...eslintConfigPrettier.rules
    }
  }
)
