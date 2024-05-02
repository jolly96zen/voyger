<script setup lang="ts">
  definePageMeta({ layout: "center" })
  useHead({ title: "index" })

  await new Promise((): void => {
    setTimeout(() => {
      return navigateTo("/dashboard")
    }, 1000)
  })
</script>
