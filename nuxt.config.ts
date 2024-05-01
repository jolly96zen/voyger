import { defineNuxtConfig } from "nuxt/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  spaLoadingTemplate: true,
  devtools: { enabled: true },
  experimental: { typedPages: true },
  app: {
    head: {
      meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
      link: [
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" },
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" }
      ],
      script: [{ src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" }]
    }
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/test-utils/module",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/supabase"
  ],
  supabase: {
    url: process.env?.["SUPABASE_PROJECT_URL"] ?? "",
    key: process.env?.["SUPABASE_API_KEY"] ?? "",
    redirect: false
  }
})
