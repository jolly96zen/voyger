<template>
  <div>
    <div class="flex items-center justify-center lg:h-screen lg:w-screen">
      <div class="mx-2 my-2 grid justify-items-center">
        <WelcomeNotification class="my-1" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({ layout: "center" })
  useHead({ title: "welcome" })

  onMounted(async (): Promise<void> => {
    await new Promise((): void => {
      setTimeout(() => {
        window.close()
      }, 5000)
    })
  })
</script>
