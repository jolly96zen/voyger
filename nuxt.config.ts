import { defineNuxtConfig } from "nuxt/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  spaLoadingTemplate: true,
  devtools: { enabled: true },
  experimental: { typedPages: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/test-utils/module",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vueuse/nuxt"
  ],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  supabase: {
    url: process.env?.["SUPABASE_PROJECT_URL"] ?? "",
    key: process.env?.["SUPABASE_API_KEY"] ?? "",
    redirect: false
  }
})
