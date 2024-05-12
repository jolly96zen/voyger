<template>
  <div></div>
</template>

<script setup lang="ts">
  definePageMeta({ layout: "center" })
  useHead({ title: "index" })

  onMounted(async (): Promise<void> => {
    await new Promise((): void => {
      setTimeout(() => {
        return navigateTo("/dashboard")
      }, 1000)
    })
  })
</script>
