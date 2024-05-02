<template>
  <div>
    <div class="mx-3 my-3 max-w-fit">
      <DashboardNotification
        :user-name="userName"
        class="my-3 text-xs"
      />
      <div v-if="supabaseUser?.confirmed_at === undefined">
        <DashboardAlert class="my-3 text-xs" />
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
