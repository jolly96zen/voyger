<template>
  <div></div>
</template>

<script setup lang="ts">
  definePageMeta({ layout: "center" })
  useHead({ title: "confirm" })

  const supabaseSession = useSupabaseSession()

  watch(
    supabaseSession,
    async (): Promise<void> => {
      if (
        supabaseSession.value !== null &&
        supabaseSession.value.provider_refresh_token !== null &&
        supabaseSession.value.provider_refresh_token !== undefined
      ) {
        await new Promise((): void => {
          setTimeout(() => {
            return navigateTo("/dashboard")
          }, 1000)
        })
      }
    },
    { immediate: true }
  )
</script>
