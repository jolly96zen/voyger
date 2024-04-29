<template>
  <div>
    <h2 class="text-center">{{ appInformation.title }}</h2>
    <hr />
    <div class="row">
      <div class="col-8">
        <div class="fw-bold">Developer Name: {{ appInformation.developerName }}</div>
      </div>
      <div class="col">
        <NuxtLink
          to="https://misskey.io/@jolly96zen"
          target="_blank"
        >
          <img
            src="https://assets.misskey-hub.net/public/icon.png"
            alt="https://assets.misskey-hub.net/public/icon.png"
            width="16"
            height="16"
          />
        </NuxtLink>
      </div>
      <div class="col">
        <NuxtLink
          to="https://github.com/jolly96zen"
          target="_blank"
          class="text-white"
        >
          <i class="bi bi-github"></i>
        </NuxtLink>
      </div>
      <div class="col">
        <NuxtLink
          to="https://twitter.com/jolly96zen"
          target="_blank"
          class="text-white"
        >
          <i class="bi bi-twitter"></i>
        </NuxtLink>
      </div>
    </div>
    <div class="fw-bold">
      Repository URL:
      <NuxtLink
        :to="appInformation.repositoryURL"
        target="_blank"
      >
        {{ appInformation.repositoryURL }}
      </NuxtLink>
    </div>
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
