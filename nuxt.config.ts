import { defineNuxtConfig } from "nuxt/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: { typedPages: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/test-utils/module",
    "@nuxt/image",
    "@vueuse/nuxt",
    "nuxt-quasar-ui",
    "@pinia/nuxt"
  ],
  quasar: { config: { dark: true } }
})
