<template>
  <div>
    <Html
      lang="ja"
      data-theme="sunset"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Html>
  </div>
</template>

<script setup lang="ts">
  useHead({
    titleTemplate: (pageTitle): string => {
      return pageTitle !== undefined ? "Voyager" + " - " + pageTitle : "Voyager"
    }
  })
</script>

<style>
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");
  @import url("https://fonts.googleapis.com/css2?family=DotGothic16&display=swap");

  body {
    font-family: "DotGothic16", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
</style>
