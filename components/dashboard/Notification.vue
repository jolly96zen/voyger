<template>
  <div>
    <div
      role="alert"
      class="alert border-2 border-success text-left"
    >
      <div class="text-sm text-success">
        <div>こんにちは、{{ userName }}さん。</div>
        <div>Voygerへようこそ！こちらはダッシュボード画面です。</div>
      </div>
      <div class="self-end">
        <button
          class="btn btn-success btn-sm"
          @click="closeDashboardNotification()"
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

  const emits = defineEmits(["closeDashboardNotification"])

  const closeDashboardNotification = (): void => {
    emits("closeDashboardNotification")
  }
</script>
