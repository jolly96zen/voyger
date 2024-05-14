export const loginWithSpotify = async (): Promise<void> => {
  const requestURL = useRequestURL()

  const userStore = useUserStore()
  const { setIsTryingToLogin } = userStore

  const supabase = useSupabaseClient()

  setIsTryingToLogin(true)

  const { error } = await supabase.auth.signInWithOAuth({
    provider: "spotify",
    options: { redirectTo: requestURL.origin + "/confirm", scopes: "user-top-read" }
  })

  if (error !== null) {
    window.alert("Spotifyアカウントによるログインに失敗しました。")
    console.error("Spotifyアカウントによるログインに失敗しました:")
    console.error(error)

    setIsTryingToLogin(false)
  }
}

export const logout = async (): Promise<void> => {
  const supabase = useSupabaseClient()

  const { error } = await supabase.auth.signOut({ scope: "local" })

  if (error !== null) {
    window.alert("ログアウトに失敗しました。")
    console.error("ログアウトに失敗しました:")
    console.error(error)

    await loginWithSpotify()
  }
}
