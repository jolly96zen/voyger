import { defineNuxtConfig } from "nuxt/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  spaLoadingTemplate: true,
  devtools: { enabled: true },
  experimental: { typedPages: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
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
  // image: {
  //   domains: ["website-files.com","scdn.co"]
  // },
  supabase: {
    url: process.env?.["SUPABASE_PROJECT_URL"] ?? "",
    key: process.env?.["SUPABASE_API_KEY"] ?? "",
    redirect: false
  }
})
