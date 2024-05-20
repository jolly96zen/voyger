<template>
  <div>
    <DashboardNotification
      v-if="!isDashboardNotificationHidden"
      :user-name="supabaseUser?.user_metadata['full_name'] ?? supabaseUser?.user_metadata['name'] ?? 'Unknown'"
      class="mx-2 my-2 max-w-fit"
      @close-dashboard-notification="closeDashboardNotification"
    />
    <div class="mx-2 my-2 grid grid-cols-1 gap-2 lg:grid-cols-2">
      <SpotifyArtistsRanking />
      <SpotifyTracksRanking />
    </div>
  </div>
</template>

<script setup lang="ts">
  useHead({ title: "dashboard" })

  const supabaseUser = useSupabaseUser()

  const isDashboardNotificationHidden: Ref<boolean> = ref(false)

  const closeDashboardNotification = (): void => {
    isDashboardNotificationHidden.value = true
  }
</script>
