import { defineNuxtConfig } from "nuxt/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  experimental: { typedPages: true },
  modules: ["@nuxt/eslint", "@nuxt/test-utils/module", "@nuxt/image", "@vueuse/nuxt", "@pinia/nuxt", "nuxt-vuefire"],
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  vuefire: {
    auth: {
      enabled: true
    },
    config: {
      apiKey: process.env?.["FIREBASE_API_KEY"] ?? "",
      authDomain: process.env?.["FIREBASE_AUTH_DOMAIN"] ?? "",
      databaseURL: process.env?.["FIREBASE_DATABASE_URL"] ?? "",
      projectId: process.env?.["FIREBASE_PROJECT_ID"] ?? "",
      storageBucket: process.env?.["FIREBASE_STORAGE_BUCKET"] ?? "",
      messagingSenderId: process.env?.["FIREBASE_MESSAGING_SENDER_ID"] ?? "",
      appId: process.env?.["FIREBASE_APP_ID"] ?? "",
      measurementId: process.env?.["FIREBASE_MEASUREMENT_ID"] ?? ""
    }
  }
})
