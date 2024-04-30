<template>
  <div>
    <div class="d-flex justify-content-center align-items-center">
      <div
        class="mt-5"
        style="width: 30rem; max-width: 90%"
      >
        <LoginNotification />
        <div v-if="isLoginError">
          <LoginAlert />
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <div
        class="mb-5"
        style="width: 20rem; max-width: 90%"
      >
        <div class="card border-light">
          <img
            src="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b2838e7afa9a2f67a36f1_105.png"
            alt="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b2838e7afa9a2f67a36f1_105.png"
            class="card-img-top"
          />
          <div class="card-body pb-0">
            <h2 class="card-title text-center">Voyger</h2>
            <hr />
            <div class="card-text">Spotify APIを使って、アクティビティを可視化するWebアプリです。</div>
            <br />
            <div class="card-text">応答願ウ 涙ト雲ノ向コウ</div>
            <div class="card-text">虹ノ隙間ニ 目ヲ凝ラシタ</div>
            <hr />
          </div>
          <div class="card-body pt-0">
            <div class="container">
              <div class="row text-center align-items-center">
                <div class="col">Login With</div>
                <div class="col">
                  <div
                    class="btn-group-vertical"
                    role="group"
                  >
                    <button
                      type="button"
                      class="btn btn-outline-primary border border-primary border-2 my-1 disabled"
                      @click="tryDemo()"
                    >
                      <i class="bi bi-person-fill me-2"></i>
                      <span>Demo</span>
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-success border border-success border-2 my-1"
                      @click="loginWithSpotify()"
                    >
                      <i class="bi bi-spotify me-2"></i>
                      <span>Spotify</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
