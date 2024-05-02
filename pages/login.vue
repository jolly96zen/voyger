<template>
  <div>
    <div class="flex h-screen w-screen items-center justify-center">
      <div class="mx-5 my-5 max-w-fit">
        <LoginNotification class="my-3 text-xs" />
        <div v-if="isLoginError">
          <LoginAlert class="my-3 text-xs" />
        </div>
        <div class="flex justify-center">
          <LoginCard
            @try-demo="tryDemo()"
            @login-with-spotify="loginWithSpotify()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({ layout: "center" })
  useHead({ title: "login" })

  const appConfig = useAppConfig()

  const userStore = useUserStore()
  const { setUserName, setIsTryingToLogin, $resetUserStore } = userStore

  const supabase = useSupabaseClient()

  const isLoginError = ref(false)

  $resetUserStore()

  const tryDemo = () => {
    setUserName("Demo")

    return navigateTo("/dashboard")
  }

  const loginWithSpotify = (): void => {
    setIsTryingToLogin(true)
    supabase.auth
      .signInWithOAuth({
        provider: "spotify",
        options: { redirectTo: appConfig.appOriginUrl + "/confirm" }
      })
      .catch((error) => {
        console.error("Fail to login with Spotify: ", error)
        isLoginError.value = true
      })
  }
</script>
