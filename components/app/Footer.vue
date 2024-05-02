<template>
  <div>
    <footer
      class="footer footer-center rounded"
      style="background-color: #008080"
    >
      <nav>
        <div class="grid grid-flow-col gap-4 text-2xl">
          <NuxtLink
            to="https://misskey.io/@jolly96zen"
            target="_blank"
          >
            <i class="bi bi-key-fill"></i>
          </NuxtLink>
          <NuxtLink
            to="https://github.com/jolly96zen"
            target="_blank"
          >
            <i class="bi bi-github"></i>
          </NuxtLink>
          <NuxtLink
            to="https://twitter.com/jolly96zen"
            target="_blank"
          >
            <i class="bi bi-twitter"></i>
          </NuxtLink>
        </div>
      </nav>
      <aside>
        <h2>{{ appInformation.title }}</h2>
        <hr />
        <div>Developer Name: {{ appInformation.developerName }}</div>
        <div>
          Repository URL:
          <a
            :href="appInformation.repositoryURL"
            target="_blank"
            class="link"
          >
            {{ appInformation.repositoryURL }}
          </a>
        </div>
      </aside>
    </footer>
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
