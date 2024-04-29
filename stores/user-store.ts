export const useUserStore = defineStore(
  "user",
  () => {
    const userName: Ref<string> = ref("Unknown")
    const isLoggedin: Ref<boolean> = ref(false)
    const isDemoUser: Ref<boolean> = ref(false)

    const setUserName = (value: string): void => {
      userName.value = value
    }
    const setIsLoggedin = (value: boolean): void => {
      isLoggedin.value = value
    }
    const setIsDemoUser = (value: boolean): void => {
      isDemoUser.value = value
    }
    const $resetUserStore = (): void => {
      userName.value = "Unknown"
      isLoggedin.value = false
      isDemoUser.value = false
    }

    return { userName, isLoggedin, isDemoUser, setUserName, setIsLoggedin, setIsDemoUser, $resetUserStore }
  },
  {
    persist: {
      storage: persistedState.sessionStorage
    }
  }
)
