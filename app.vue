<template>
  <div>
    <Html
      lang="ja"
      class="dark"
    >
      <Body class="dark:bg-gray-900">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </Body>
    </Html>
  </div>
</template>

<script setup lang="ts">
  import { initFlowbite } from "flowbite"

  useHead({
    titleTemplate: (pageTitle) => {
      return pageTitle !== undefined ? "Voyger" + " - " + pageTitle : "Voyger"
    }
  })

  onMounted(() => {
    initFlowbite()
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
