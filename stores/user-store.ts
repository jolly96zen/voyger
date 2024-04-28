export const useUserStore = defineStore(
  "user",
  () => {
    const name: Ref<string> = ref("anonymous")
    const isLoggedin: Ref<boolean> = ref(false)
    const isAnonymousUser: Ref<boolean> = ref(false)
    const setIsLoggedin = (value: boolean): void => {
      isLoggedin.value = value
    }
    const setIsAnonymousUser = (value: boolean): void => {
      isAnonymousUser.value = value
    }

    return { name, isLoggedin, isAnonymousUser, setIsLoggedin, setIsAnonymousUser }
  },
  {
    persist: {
      storage: persistedState.sessionStorage
    }
  }
)
