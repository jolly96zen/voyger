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

  const userStore = useUserStore()
  const { setCanRetryLogin } = userStore

  onMounted((): void => {
    setTimeout((): void => {
      if (window.open("", "_self") !== null) {
        setCanRetryLogin(true)
        window.close()
      } else {
        window.alert("手動で画面を閉じてください。")
        console.error("画面を閉じる処理に失敗しました。")
      }
    }, 3000)
  })
</script>
