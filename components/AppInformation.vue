<template>
  <div>
    <span>{{ appInformation.title }}</span>
    <hr />
    <span>Developer Name: {{ appInformation.developerName }}</span>
    <br />
    <span>
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
    title: "Voyger",
    developerName: "Kotaro Kuroda",
    repositoryURL: "https://github.com/jolly96zen/voyger"
  }
</script>
