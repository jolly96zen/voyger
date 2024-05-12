<template>
  <div>
    <DashboardNotification
      v-if="!isDashboardNotificationHidden"
      :user-name="supabaseUser?.user_metadata['name']"
      class="mx-2 my-2 max-w-fit"
      @close-dashboard-notification="closeDashboardNotification()"
    />
    <div v-if="supabaseUser?.confirmed_at === undefined">
      <DashboardAlert class="mx-2 my-2 max-w-fit" />
    </div>
    <div class="grid grid-cols-1 justify-items-stretch gap-2 lg:grid-cols-2">
      <SpotifyRanking class="mx-2 my-2" />
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
