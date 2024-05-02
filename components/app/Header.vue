<template>
  <div>
    <div
      class="navbar"
      style="background-color: #008080"
    >
      <div class="navbar-start">
        <div class="flex-none lg:hidden">
          <label
            for="voyger-menu-drawer"
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
        <NuxtLink to="/dashboard">
          <div class="flex items-center">
            <img
              src="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b2838e7afa9a2f67a36f1_105.png"
              alt="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b2838e7afa9a2f67a36f1_105.png"
              width="50"
              height="50"
            />
            <div class="text-xl">Voyger</div>
          </div>
        </NuxtLink>
      </div>
      <div class="navbar-end"></div>
    </div>
  </div>
</template>
