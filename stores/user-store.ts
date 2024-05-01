export const useUserStore = defineStore(
  "user",
  () => {
    const userName: Ref<string> = ref("Unknown")
    const isTryingToLogin: Ref<boolean> = ref(false)

    const setUserName = (value: string): void => {
      userName.value = value
    }
    const setIsTryingToLogin = (value: boolean): void => {
      isTryingToLogin.value = value
    }

    const $resetUserStore = (): void => {
      userName.value = "Unknown"
      isTryingToLogin.value = false
    }

    return { userName, isTryingToLogin, setUserName, setIsTryingToLogin, $resetUserStore }
  },
  {
    // persist: {
    //   storage: persistedState.sessionStorage
    // }
    persist: true
  }
)
