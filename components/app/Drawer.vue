<template>
  <div>
    <nav
      class="fixed top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
      style="background-color: #008080"
    >
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
            >
              <svg
                class="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <NuxtLink
              to="/dashboard"
              class="ms-2 flex md:me-24"
            >
              <img
                src="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b2838e7afa9a2f67a36f1_105.png"
                alt="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b2838e7afa9a2f67a36f1_105.png"
                class="me-3 h-8"
              />
              <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white sm:text-2xl">
                Voyger
              </span>
            </NuxtLink>
          </div>
          <div class="flex items-center">
            <div class="ms-3 flex items-center">
              <div>
                <button
                  type="button"
                  class="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <img
                    class="h-8 w-8 rounded-full"
                    :src="userImageUrl"
                    :alt="userImageUrl"
                  />
                </button>
              </div>
              <div
                class="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
                id="dropdown-user"
              >
                <div
                  class="px-4 py-3"
                  role="none"
                >
                  <p
                    class="text-sm text-gray-900 dark:text-white"
                    role="none"
                  >
                    {{ userName }}
                  </p>
                  <p
                    class="truncate text-sm font-medium text-gray-900 dark:text-gray-300"
                    role="none"
                  >
                    {{ userMailAddress }}
                  </p>
                </div>
                <ul
                  class="py-1"
                  role="none"
                >
                  <li hidden>
                    <NuxtLink
                      to=""
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      プロフィール
                    </NuxtLink>
                  </li>
                  <li hidden>
                    <NuxtLink
                      to=""
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      設定
                    </NuxtLink>
                  </li>
                  <li>
                    <a
                      href="javascript: void(0)"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                      @click="logout()"
                    >
                      ログアウト
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <aside
      id="logo-sidebar"
      class="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r border-gray-200 bg-white pt-20 transition-transform dark:border-gray-700 dark:bg-gray-800 sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full overflow-y-auto bg-white px-3 pb-4 dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <li>
            <NuxtLink
              to="/dashboard"
              class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <i class="bi bi-bar-chart-fill text-lg"></i>
              <span class="ms-3">ダッシュボード</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </aside>

    <div class="mx-8 mb-20 mt-20 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700 sm:ml-72">
      <slot />
    </div>

    <footer
      class="fixed bottom-0 left-0 z-50 flex w-full items-center justify-center border-t border-gray-200 bg-white p-2 shadow dark:border-gray-600 dark:bg-gray-800"
      style="background-color: #008080"
    >
      <div class="text-center">
        <div class="text-sm text-gray-500 dark:text-gray-400">Developed by: Kotaro Kuroda</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">
          <NuxtLink
            to="https://github.com/jolly96zen"
            target="_blank"
            class="mx-1"
          >
            <i class="bi bi-github"></i>
          </NuxtLink>
          <NuxtLink
            to="https://misskey.io/@jolly96zen"
            target="_blank"
            class="mx-1"
          >
            <i class="bi bi-key-fill"></i>
          </NuxtLink>
          <NuxtLink
            to="https://twitter.com/jolly96zen"
            target="_blank"
            class="mx-1"
          >
            <i class="bi bi-twitter"></i>
          </NuxtLink>
        </div>
        <ul class="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400">
          <li>
            <a
              href="https://github.com/jolly96zen/voyger"
              class="hover:underline"
            >
              Repository URL: https://github.com/jolly96zen/voyger
            </a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  const userStore = useUserStore()
  const { userName, userMailAddress, userImageUrl } = storeToRefs(userStore)
  const { setUserName, setUserMailAddress, setUserImageUrl, setIsTryingToLogin, $resetUserStore } = userStore

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
      setUserMailAddress(supabaseUser.value?.user_metadata["email"] ?? "")
      setUserImageUrl(
        supabaseUser.value?.user_metadata["avatar_url"] ?? supabaseUser.value?.user_metadata["picture"] ?? ""
      )
      setIsTryingToLogin(false)
    },
    { immediate: true }
  )
</script>
