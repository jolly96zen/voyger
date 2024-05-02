<template>
  <div>
    <div
      id="login-notification"
      class="rounded-lg border-4 border-yellow-300 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-gray-800 dark:text-yellow-300"
      role="alert"
    >
      <div class="mx-2 my-2 text-sm">
        <div>Voygerは、Spotify APIを利用します。</div>
        <div>Demoアカウントによるログイン機能は、実装を延期しています。</div>
        <div>
          参考URL:
          <a
            href="https://developer.spotify.com/documentation/web-api/concepts/authorization"
            target="_blank"
            class="font-semibold underline hover:no-underline"
          >
            https://developer.spotify.com/documentation/web-api/concepts/authorization
          </a>
        </div>
      </div>
      <div class="mx-2 my-2 flex justify-end">
        <button
          type="button"
          class="rounded-lg border-2 border-yellow-800 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-yellow-800 hover:bg-yellow-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-300 dark:hover:text-gray-800 dark:focus:ring-yellow-800"
          data-dismiss-target="#login-notification"
          aria-label="Close"
        >
          閉じる
        </button>
      </div>
    </div>
  </div>
</template>
