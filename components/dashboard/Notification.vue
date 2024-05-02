<template>
  <div>
    <div
      id="login-notification"
      class="rounded-lg border-4 border-green-300 bg-green-50 text-green-800 dark:border-green-800 dark:bg-gray-800 dark:text-green-300"
      role="alert"
    >
      <div class="mx-2 my-2 text-sm">
        <div>こんにちは、{{ userName }}さん。</div>
        <div>Voygerへようこそ！こちらはダッシュボード画面です。</div>
        <div>あなたのSpotifyでのアクティビティを可視化してみましょう。</div>
      </div>
      <div class="mx-2 my-2 flex justify-end">
        <button
          type="button"
          class="rounded-lg border-2 border-green-800 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-green-800 hover:bg-green-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-300 dark:border-green-300 dark:text-green-300 dark:hover:bg-green-300 dark:hover:text-gray-800 dark:focus:ring-green-800"
          data-dismiss-target="#login-notification"
          aria-label="Close"
        >
          閉じる
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    userName: String
  })
</script>
