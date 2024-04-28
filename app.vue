<template>
  <div>
    <Html
      lang="ja"
      data-bs-theme="dark"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Html>
  </div>
</template>

<script setup lang="ts">
  useHead({
    titleTemplate: (pageTitle) => {
      return pageTitle !== undefined ? "Voyger" + " - " + pageTitle : "Voyger"
    }
  })
</script>
