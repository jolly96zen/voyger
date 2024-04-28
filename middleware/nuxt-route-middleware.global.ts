export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore()
  const { name, isLoggedin, isAnonymousUser } = storeToRefs(userStore)

  if (to.path === "/login") {
    if (isLoggedin.value && !isAnonymousUser.value) {
      return navigateTo("/dashboard")
    }
  } else {
    if (!isLoggedin.value) {
      return navigateTo("/login")
    }
  }
})
