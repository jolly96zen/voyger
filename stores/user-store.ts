export const useUserStore = defineStore(
  "user",
  () => {
    const userName: Ref<string> = ref("Unknown")
    const userMailAddress: Ref<string> = ref("")
    const userImageUrl: Ref<string> = ref("")
    const isTryingToLogin: Ref<boolean> = ref(false)

    const setUserName = (value: string): void => {
      userName.value = value
    }
    const setUserMailAddress = (value: string): void => {
      userMailAddress.value = value
    }
    const setUserImageUrl = (value: string): void => {
      userImageUrl.value = value
    }
    const setIsTryingToLogin = (value: boolean): void => {
      isTryingToLogin.value = value
    }

    const $resetUserStore = (): void => {
      setUserName("Unknown")
      setUserMailAddress("")
      setUserImageUrl("")
      setIsTryingToLogin(false)
    }

    return {
      userName,
      userMailAddress,
      userImageUrl,
      isTryingToLogin,
      setUserName,
      setUserMailAddress,
      setUserImageUrl,
      setIsTryingToLogin,
      $resetUserStore
    }
  },
  {
    // persist: {
    //   storage: persistedState.sessionStorage
    // }
    persist: true
  }
)
