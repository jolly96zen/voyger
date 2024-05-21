<template>
  <div>
    <div class="flex items-center justify-center lg:h-screen lg:w-screen">
      <div class="mx-2 my-2 grid justify-items-center">
        <ConfirmNotification class="my-1" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({ layout: "center" })
  useHead({ title: "confirm" })

  const userStore = useUserStore()
  const { canRetryLogin } = storeToRefs(userStore)

  onMounted((): void => {
    setTimeout(async (): Promise<void> => {
      if (canRetryLogin.value) {
        await loginWithSpotify()
      } else {
        window.location.reload()
      }
    }, 3000)
  })
</script>
