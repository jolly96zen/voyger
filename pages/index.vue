<template>
  <div>
    <div
      class="alert alert-primary d-flex align-items-center border border-primary border-2"
      role="alert"
    >
      <i class="bi bi-info-circle me-2"></i>
      <div>自動的にダッシュボード画面に遷移します。</div>
    </div>
    <AppInformation />
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "center"
  })
  useHead({
    title: "index"
  })

  onMounted(async () => {
    await new Promise(() => {
      setTimeout(() => {
        navigateTo("/dashboard", { external: true })
      }, 3000)
    })
  })
</script>
