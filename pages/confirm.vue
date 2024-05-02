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
          }, 1000)
        })
      } else {
        await new Promise((): void => {
          setTimeout(() => {
            return nuxtApp.runWithContext(() => navigateTo("/login"))
          }, 1000)
        })
      }
    },
    { immediate: true }
  )
</script>
