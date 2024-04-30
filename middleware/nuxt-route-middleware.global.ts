export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore()
  const { isTryingToLogin } = storeToRefs(userStore)

  const supabaseSession = useSupabaseSession()

  if (to.path.includes("/login")) {
    if (supabaseSession.value !== null) {
      return navigateTo("/dashboard")
    }
  } else if (to.path.includes("/confirm")) {
    if (supabaseSession.value !== null) {
      return navigateTo("/dashboard")
    } else if (!isTryingToLogin.value) {
      return navigateTo("/login")
    }
  } else {
    if (supabaseSession.value === null) {
      return navigateTo("/login")
    }
  }
})
