<template>
  <div>
    <div class="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <img
        src="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b2838e7afa9a2f67a36f1_105.png"
        alt="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b2838e7afa9a2f67a36f1_105.png"
        class="rounded-t-lg"
      />
      <div class="p-5">
        <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Voyger</h5>
        <hr />
        <div class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <div>Spotify APIを使って、アクティビティを可視化するWebアプリです。</div>
          <br />
          <div>応答願ウ 涙ト雲ノ向コウ</div>
          <div>虹ノ隙間ニ 目ヲ凝ラシタ</div>
        </div>
        <hr />
        <div class="mt-3 font-normal text-gray-700 dark:text-gray-400">Login With:</div>
        <ul class="my-2 space-y-3">
          <li>
            <a
              href="javascript: void(0)"
              class="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
              @click="tryDemo()"
            >
              <i class="bi bi-person-fill"></i>
              <span class="ms-3 flex-1 whitespace-nowrap">Demo</span>
              <span
                class="ms-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400"
              >
                未実装
              </span>
            </a>
          </li>
          <li>
            <a
              href="javascript: void(0)"
              class="group flex items-center rounded-lg bg-green-50 p-3 text-base font-bold text-green-900 hover:bg-green-100 hover:shadow dark:bg-green-600 dark:text-white dark:hover:bg-green-500"
              @click="loginWithSpotify()"
            >
              <i class="bi bi-spotify"></i>
              <span class="ms-3 flex-1 whitespace-nowrap"> Spotify </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const emits = defineEmits(["tryDemo", "loginWithSpotify"])

  const tryDemo = (): void => {
    emits("tryDemo")
  }

  const loginWithSpotify = (): void => {
    emits("loginWithSpotify")
  }
</script>
