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

  const supabaseSession = useSupabaseSession()

  // onMounted(async (): Promise<void> => {
  //   await new Promise((): void => {
  //     setTimeout(() => {
  //       return navigateTo("/login")
  //     }, 5000)
  //   })
  // })

  watch(supabaseSession, () => {
    if (
      supabaseSession.value !== null &&
      supabaseSession.value.provider_refresh_token !== null &&
      supabaseSession.value.provider_refresh_token !== undefined
    ) {
      console.info("セッションが有効です。")
      console.info("ダッシュボード画面に遷移します。")

      return navigateTo("/dashboard")
    }
  })
</script>
