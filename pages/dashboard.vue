<template>
  <div class="container">
    <div>
      <div
        class="alert alert-success alert-dismissible fade show border border-success border-2"
        role="alert"
      >
        <div>こんにちは、{{ userName }}さん。</div>
        <div>Voygerへようこそ。こちらはダッシュボード画面です。</div>
        <div>あなたの好きなアーティストを可視化してみましょう。</div>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  useHead({
    title: "dashboard"
  })

  const userStore = useUserStore()
  const { userName, isLoggedin, isDemoUser } = storeToRefs(userStore)
</script>
