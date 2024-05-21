export const useUserStore = defineStore(
  "user",
  () => {
    const isTryingToLogin: Ref<boolean> = ref(false)
    const canRetryLogin: Ref<boolean> = ref(false)

    const setIsTryingToLogin = (value: boolean): void => {
      isTryingToLogin.value = value
    }
    const setCanRetryLogin = (value: boolean): void => {
      canRetryLogin.value = value
    }

    const $resetUserStore = (): void => {
      setIsTryingToLogin(false)
      setCanRetryLogin(false)
    }

    return {
      isTryingToLogin,
      canRetryLogin,
      setIsTryingToLogin,
      setCanRetryLogin,
      $resetUserStore
    }
  },
  {
    persist: true
  }
)
