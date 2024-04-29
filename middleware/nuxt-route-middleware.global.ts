export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore()
  const { userName, isLoggedin, isDemoUser } = storeToRefs(userStore)

  if (to.path === "/login") {
    if (isLoggedin.value && !isDemoUser.value) {
      return navigateTo("/dashboard")
    }
  } else {
    if (!isLoggedin.value) {
      return navigateTo("/login")
    }
  }
})
