<template>
  <div>
    <div class="d-flex justify-content-center align-items-center">
      <div
        class="mt-5"
        style="max-width: 90%"
      >
        <ConfirmNotification />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({ layout: "center" })
  useHead({ title: "confirm" })

  const supabaseUser = useSupabaseUser()

  watch(
    supabaseUser,
    async (): Promise<void> => {
      const nuxtApp = useNuxtApp()

      if (supabaseUser.value !== null) {
        await new Promise((): void => {
          setTimeout(() => {
            return nuxtApp.runWithContext(() => navigateTo("/dashboard"))
          }, 3000)
        })
      } else {
        await new Promise((): void => {
          setTimeout(() => {
            return nuxtApp.runWithContext(() => navigateTo("/login"))
          }, 3000)
        })
      }
    },
    { immediate: true }
  )
</script>
