<template>
  <div>
    <div class="flex items-center justify-center lg:h-screen lg:w-screen">
      <div class="mx-2 my-2 grid justify-items-center">
        <LoginNotification
          v-if="!isLoginNotificationHidden"
          class="my-1"
          @close-login-notification="closeLoginNotification()"
        />
        <LoginAlert
          v-if="!isLoginAlertHidden"
          class="my-1"
        />
        <LoginCard
          class="my-1"
          @try-demo="tryDemo()"
          @login-with-spotify="loginWithSpotify()"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({ layout: "center" })
  useHead({ title: "login" })

  const requestURL = useRequestURL()

  const userStore = useUserStore()
  const { setIsTryingToLogin, $resetUserStore } = userStore

  const supabase = useSupabaseClient()

  const isLoginNotificationHidden: Ref<boolean> = ref(false)
  const isLoginAlertHidden: Ref<boolean> = ref(true)

  const closeLoginNotification = (): void => {
    isLoginNotificationHidden.value = true
  }

  const tryDemo = () => {
    return navigateTo("/dashboard")
  }

  const loginWithSpotify = async (): Promise<void> => {
    setIsTryingToLogin(true)
    await supabase.auth
      .signInWithOAuth({
        provider: "spotify",
        options: { redirectTo: requestURL.origin + "/confirm", scopes: "user-top-read" }
      })
      .catch((error): void => {
        console.error("Spotifyアカウントによるログインに失敗しました: ")
        console.error(error)
        isLoginAlertHidden.value = false
      })
  }

  onMounted((): void => {
    $resetUserStore()
  })
</script>
