export const getSpotifyRefreshToken = async () => {
  const appConfig = useAppConfig()
  const supabaseSession = useSupabaseSession()

  return await useLazyFetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: {
      grant_type: "refresh_token",
      refresh_token: supabaseSession.value?.provider_refresh_token ?? "",
      client_id: appConfig.spotifyClientID
    }
  })
}
