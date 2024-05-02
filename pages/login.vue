<template>
  <div>
    <div class="flex items-center justify-center lg:h-screen lg:w-screen">
      <div class="mx-2 my-2 grid justify-items-center">
        <LoginNotification class="my-1" />
        <div v-if="isLoginError">
          <LoginAlert class="my-1" />
        </div>
        <div class="flex justify-center">
          <LoginCard
            class="my-1"
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
