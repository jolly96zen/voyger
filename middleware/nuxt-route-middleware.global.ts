export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = await getCurrentUser()

  if (to.path === "/login") {
    if (user !== null) {
      if (from.path === "/login") {
        return navigateTo("/dashboard", { external: true })
      } else {
        return navigateTo(from.path, { external: true })
      }
    }
  } else {
    if (user === null) {
      return navigateTo("/login", { external: true })
    }
  }
})
