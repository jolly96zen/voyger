<template>
  <div>
    <div
      role="alert"
      class="alert border-2 border-warning text-left"
    >
      <div class="text-sm text-warning">
        <div>Voygerは、Spotify APIを利用します。</div>
        <div>
          参考URL:
          <a
            href="https://developer.spotify.com/documentation/web-api/concepts/authorization"
            target="_blank"
            class="underline hover:no-underline"
          >
            https://developer.spotify.com/documentation/web-api/concepts/authorization
          </a>
        </div>
      </div>
      <div class="self-end">
        <button
          class="btn btn-warning btn-sm"
          @click="closeLoginNotification"
        >
          閉じる
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const emits = defineEmits(["closeLoginNotification"])

  const closeLoginNotification = (): void => {
    emits("closeLoginNotification")
  }
</script>
