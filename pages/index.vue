<template>
  <div>
    <div class="d-flex justify-content-center align-items-center">
      <div
        class="mx-5 my-5"
        style="max-width: 90%"
      >
        <IndexNotification />
        <AppInformation />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({ layout: "center" })
  useHead({ title: "index" })

  await new Promise((): void => {
    setTimeout(() => {
      return navigateTo("/dashboard")
    }, 3000)
  })
</script>
