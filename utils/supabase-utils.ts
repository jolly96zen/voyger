export const loginWithSpotify = async (): Promise<void> => {
  const requestURL = useRequestURL()

  const userStore = useUserStore()
  const { setIsTryingToLogin } = userStore

  const supabase = useSupabaseClient()

  setIsTryingToLogin(true)
  await supabase.auth
    .signInWithOAuth({
      provider: "spotify",
      options: { redirectTo: requestURL.origin + "/confirm", scopes: "user-top-read" }
    })
    .catch((error): void => {
      window.alert("Spotifyアカウントによるログインに失敗しました。")
      console.error("Spotifyアカウントによるログインに失敗しました:")
      console.error(error)

      setIsTryingToLogin(false)
    })
}

export const logout = async () => {
  const userStore = useUserStore()
  const { $resetUserStore } = userStore

  const supabase = useSupabaseClient()

  await supabase.auth
    .signOut({ scope: "local" })
    .catch((error) => {
      window.alert("ログアウトに失敗しました。")
      console.error("ログアウトに失敗しました:")
      console.error(error)
    })
    .finally(() => {
      $resetUserStore()

      return navigateTo("/login")
    })
}
