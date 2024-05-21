export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore()
  const { isTryingToLogin } = storeToRefs(userStore)

  const supabaseSession = useSupabaseSession()

  if (to.path.includes("/login")) {
    if (
      supabaseSession.value !== null &&
      supabaseSession.value.provider_refresh_token !== null &&
      supabaseSession.value.provider_refresh_token !== undefined
    ) {
      console.info("セッションが有効です。")
      console.info("ダッシュボード画面に遷移します。")

      return navigateTo("/dashboard")
    }
  } else if (to.path.includes("/confirm")) {
    if (
      supabaseSession.value !== null &&
      supabaseSession.value.provider_refresh_token !== null &&
      supabaseSession.value.provider_refresh_token !== undefined
    ) {
      console.info("セッションが有効です。")
      console.info("ダッシュボード画面に遷移します。")

      return navigateTo("/dashboard")
    } else if (!isTryingToLogin.value) {
      console.warn("不正なアクセスです。")
      console.info("ログイン画面に遷移します。")

      return navigateTo("/login")
    }
  } else if (to.path.includes("/welcome")) {
    console.info("Voyagerへようこそ！")
  } else {
    if (supabaseSession.value === null) {
      console.warn("セッションが無効です。")
      console.info("ログイン画面に遷移します。")

      return navigateTo("/login")
    }
  }
})
