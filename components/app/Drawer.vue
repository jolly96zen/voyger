<template>
  <div>
    <div class="drawer lg:drawer-open">
      <input
        id="app-menu-drawer"
        type="checkbox"
        class="drawer-toggle"
      />
      <div class="drawer-content flex flex-col">
        <div class="navbar w-full bg-teal-700">
          <div class="navbar-start">
            <div class="flex-none lg:hidden">
              <label
                for="app-menu-drawer"
                aria-label="open sidebar"
                class="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
          <div class="navbar-center">
            <NuxtLink
              to="/dashboard"
              class="flex"
            >
              <img
                src="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b2838e7afa9a2f67a36f1_105.png"
                alt="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b2838e7afa9a2f67a36f1_105.png"
                class="h-12 w-12"
              />
              <div class="self-center text-2xl font-semibold">Voyger</div>
            </NuxtLink>
          </div>
          <div class="navbar-end">
            <div class="dropdown dropdown-end">
              <div
                tabindex="0"
                role="button"
                class="avatar btn btn-circle btn-ghost"
              >
                <div class="h-8 w-8 rounded-full">
                  <img
                    :src="supabaseUser?.user_metadata['avatar_url'] ?? supabaseUser?.user_metadata['picture'] ?? ''"
                    :alt="supabaseUser?.user_metadata['avatar_url'] ?? supabaseUser?.user_metadata['picture'] ?? ''"
                  />
                </div>
              </div>
              <ul
                tabindex="0"
                class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-gray-700 p-2 shadow"
              >
                <li hidden>
                  <NuxtLink to="">プロフィール</NuxtLink>
                </li>
                <li hidden>
                  <NuxtLink to="">設定</NuxtLink>
                </li>
                <li>
                  <a
                    href="javascript: void(0)"
                    @click="logout"
                  >
                    ログアウト
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="min-h-screen">
          <slot />
        </div>
        <footer class="footer footer-center bg-teal-700 p-1">
          <aside>
            <div class="font-semibold">Developed by: Kotaro Kuroda</div>
            <div class="font-semibold">
              Repository URL:
              <a
                href="https://github.com/jolly96zen/voyger"
                target="_blank"
                class="underline hover:no-underline"
              >
                https://github.com/jolly96zen/voyger
              </a>
            </div>
          </aside>
        </footer>
      </div>
      <div class="drawer-side">
        <label
          for="app-menu-drawer"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <ul class="menu min-h-screen w-80 bg-gray-700 p-4">
          <li>
            <NuxtLink
              to="/dashboard"
              class="font-semibold"
            >
              <i class="bi bi-bar-chart-fill"></i>
              ダッシュボード
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const userStore = useUserStore()
  const { setIsTryingToLogin } = userStore

  const supabaseSession = useSupabaseSession()
  const supabaseUser = useSupabaseUser()

  onMounted((): void => {
    setIsTryingToLogin(false)
  })

  watch(supabaseSession, () => {
    if (supabaseSession.value === null) {
      console.warn("セッションが無効です。")
      console.info("ログイン画面に遷移します。")

      return navigateTo("/login")
    }
  })
</script>
