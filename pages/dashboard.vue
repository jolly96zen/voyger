<template>
  <div>
    <DashboardNotification
      :user-name="userName"
      class="my-2 max-w-fit"
    />
    <div v-if="supabaseUser?.confirmed_at === undefined">
      <DashboardAlert class="my-2 max-w-fit" />
    </div>
  </div>
</template>

<script setup lang="ts">
  useHead({ title: "dashboard" })

  const userStore = useUserStore()
  const { userName } = storeToRefs(userStore)

  const supabaseUser = useSupabaseUser()
</script>
