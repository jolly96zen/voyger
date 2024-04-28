<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  useHead({
    titleTemplate: (pageTitle) => {
      return pageTitle !== undefined ? "Voyger" + " - " + pageTitle : "Voyger"
    },
    htmlAttrs: {
      lang: "ja",
      "data-bs-theme": "dark"
    }
  })
</script>
