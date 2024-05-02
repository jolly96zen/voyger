<template>
  <div>
    <div
      role="alert"
      class="alert alert-success"
    >
      <div class="text-left">
        <div>こんにちは、{{ userName }}さん。</div>
        <div>Voygerへようこそ！こちらはダッシュボード画面です。</div>
        <div>あなたのSpotifyでのアクティビティを可視化してみましょう。</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    userName: String
  })
</script>
