<template>
  <div>
    <div
      class="alert alert-success alert-dismissible fade show border border-success border-2 text-break"
      role="alert"
    >
      <div>こんにちは、{{ userName }}さん。</div>
      <div>Voygerへようこそ！こちらはダッシュボード画面です。</div>
      <div>あなたのSpotifyでのアクティビティを可視化してみましょう。</div>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    userName: String
  })
</script>
