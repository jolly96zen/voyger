<template>
  <div>
    <DashboardNotification
      v-if="!isDashboardNotificationHidden"
      :user-name="supabaseUser?.user_metadata['name']"
      class="mx-2 my-2 max-w-fit"
      @close-dashboard-notification="closeDashboardNotification"
    />
    <div v-if="supabaseSession !== null && supabaseUser?.confirmed_at === undefined">
      <DashboardAlert class="mx-2 my-2 max-w-fit" />
    </div>
    <div class="mx-2 my-2 grid grid-cols-1 gap-2 lg:grid-cols-2">
      <SpotifyArtistsRanking />
      <SpotifyTracksRanking />
    </div>
  </div>
</template>

<script setup lang="ts">
  useHead({ title: "dashboard" })

  const supabaseSession = useSupabaseSession()
  const supabaseUser = useSupabaseUser()

  const isDashboardNotificationHidden: Ref<boolean> = ref(false)

  const closeDashboardNotification = (): void => {
    isDashboardNotificationHidden.value = true
  }
</script>
