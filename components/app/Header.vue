<template>
  <div>
    <nav
      class="navbar navbar-expand-lg sticky-top mb-3"
      style="background-color: #008080"
    >
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <NuxtLink
          class="navbar-brand row align-items-center"
          to="/dashboard"
        >
          <div class="col pe-0">
            <img
              src="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b2838e7afa9a2f67a36f1_105.png"
              alt="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b2838e7afa9a2f67a36f1_105.png"
              width="50"
              height="50"
            />
          </div>
          <div class="col px-0">
            <h2>Voyger</h2>
          </div>
        </NuxtLink>
        <div
          id="offcanvasNavbar"
          class="offcanvas offcanvas-start"
          tabindex="-1"
        >
          <div class="offcanvas-header">
            <h5
              id="offcanvasNavbarLabel"
              class="offcanvas-title"
            >
              Voyger
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1">
              <li class="nav-item">
                <NuxtLink
                  class="nav-link"
                  to="/dashboard"
                >
                  ダッシュボード
                </NuxtLink>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <i class="bi bi-person"></i>
                  <span>アカウント</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <a
                      class="dropdown-item disabled"
                      href="#"
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item disabled"
                      href="#"
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a
                      v-if="isDemoUser"
                      class="dropdown-item"
                      href="javascript:void(0);"
                      @click="logout()"
                    >
                      デモを終了
                    </a>
                    <a
                      v-else
                      class="dropdown-item"
                      href="javascript:void(0);"
                      @click="logout()"
                    >
                      ログアウト
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
  const userStore = useUserStore()
  const { userName, isLoggedin, isDemoUser } = storeToRefs(userStore)
  const { setUserName, setIsLoggedin, setIsDemoUser, $resetUserStore } = userStore

  const logout = (): void => {
    $resetUserStore()
    navigateTo("/login", { external: true })
  }
</script>
