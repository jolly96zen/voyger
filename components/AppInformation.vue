<template>
  <div>
    <span class="text-h1">{{ appInformation.title }}</span>
    <hr />
    <span class="text-caption">Developer Name: {{ appInformation.developerName }}</span>
    <br />
    <span class="text-caption">
      Repository URL:
      <NuxtLink
        :to="appInformation.repositoryURL"
        target="_blank"
      >
        {{ appInformation.repositoryURL }}
      </NuxtLink>
    </span>
  </div>
</template>

<script setup lang="ts">
  import type { AppInformation } from "~/types"

  const appInformation: AppInformation = {
    title: "Nuxt-App",
    developerName: "Kotaro Kuroda",
    repositoryURL: "https://github.com/jolly96zen/nuxt-app-boilerplate"
  }
</script>
