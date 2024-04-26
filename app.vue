<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  useHead({
    title: "nuxt-app",
    htmlAttrs: {
      lang: "ja"
    }
  })
</script>
