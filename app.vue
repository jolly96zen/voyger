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
    }
  })
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=DotGothic16&display=swap");

  body {
    font-family: "DotGothic16", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
</style>
