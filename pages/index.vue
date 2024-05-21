<template>
  <div></div>
</template>

<script setup lang="ts">
  definePageMeta({ layout: "center" })
  useHead({ title: "index" })

  onMounted((): void => {
    setTimeout(() => {
      return navigateTo("/dashboard")
    }, 1000)
  })
</script>
