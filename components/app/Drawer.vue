<template>
  <div>
    <div class="drawer lg:drawer-open">
      <input
        id="voyger-menu-drawer"
        type="checkbox"
        class="drawer-toggle"
      />
      <div class="drawer-content">
        <AppHeader />
        <slot />
        <AppFooter />
      </div>
      <div class="drawer-side">
        <label
          for="voyger-menu-drawer"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <ul
          class="menu min-h-full w-80 p-4 text-base-content"
          style="background-color: #003333"
        >
          <li>
            <NuxtLink to="/dashboard">
              <i class="bi bi-bar-chart-fill"></i>
              <span>ダッシュボード</span>
            </NuxtLink>
          </li>
          <li>
            <details>
              <summary>
                <i class="bi bi-person-fill"></i>
                <span>アカウント</span>
              </summary>
              <ul>
                <li>
                  <a>プロフィール</a>
                </li>
                <li>
                  <a
                    href="javascript: void(0);"
                    @click="logout()"
                  >
                    ログアウト
                  </a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const userStore = useUserStore()
  const { setUserName, setIsTryingToLogin, $resetUserStore } = userStore

  const supabase = useSupabaseClient()
  const supabaseUser = useSupabaseUser()

  const logout = async () => {
    await supabase.auth.signOut()
    $resetUserStore()

    return navigateTo("/login")
  }

  watch(
    supabaseUser,
    (): void => {
      setUserName(supabaseUser.value?.user_metadata["name"] ?? "Unknown")
      setIsTryingToLogin(false)
    },
    { immediate: true }
  )
</script>
