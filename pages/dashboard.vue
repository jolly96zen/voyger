<template>
  <div class="container">
    <div style="max-width: 90%">
      <DashboardNotification :userName="userName" />
      <div v-if="supabaseUser?.confirmed_at === undefined">
        <DashboardAlert />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  useHead({ title: "dashboard" })

  const userStore = useUserStore()
  const { userName } = storeToRefs(userStore)

  const supabaseUser = useSupabaseUser()
</script>
