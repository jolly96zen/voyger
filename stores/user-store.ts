export const useUserStore = defineStore(
  "user",
  () => {
    const isTryingToLogin: Ref<boolean> = ref(false)

    const setIsTryingToLogin = (value: boolean): void => {
      isTryingToLogin.value = value
    }

    const $resetUserStore = (): void => {
      setIsTryingToLogin(false)
    }

    return {
      isTryingToLogin,
      setIsTryingToLogin,
      $resetUserStore
    }
  },
  {
    persist: true
  }
)
