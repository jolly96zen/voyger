<template>
  <div>
    <div class="flex items-center justify-center lg:h-screen lg:w-screen">
      <div class="mx-2 my-2 grid justify-items-center">
        <LoginNotification
          v-if="!isLoginNotificationHidden"
          class="my-1"
          @close-login-notification="closeLoginNotification"
        />
        <LoginCard
          class="my-1 max-w-sm"
          @try-demo="tryDemo"
          @login-with-spotify="loginWithSpotify"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({ layout: "center" })
  useHead({ title: "login" })

  const userStore = useUserStore()
  const { $resetUserStore } = userStore

  const isLoginNotificationHidden: Ref<boolean> = ref(false)

  const closeLoginNotification = (): void => {
    isLoginNotificationHidden.value = true
  }

  const tryDemo = () => {
    return navigateTo("/dashboard")
  }

  onMounted((): void => {
    $resetUserStore()
  })
</script>
