<template>
  <div>
    <div class="card card-compact max-w-sm bg-teal-700">
      <figure>
        <!-- <NuxtImg
          src="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b2838e7afa9a2f67a36f1_105.png"
          alt="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b2838e7afa9a2f67a36f1_105.png"
        /> -->
        <img
          src="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b2838e7afa9a2f67a36f1_105.png"
          alt="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b2838e7afa9a2f67a36f1_105.png"
        />
      </figure>
      <div class="card-body">
        <div class="card-title flex justify-center">
          <div class="text-2xl">Voyger</div>
        </div>
        <hr />
        <div class="font-semibold">【ホームシック衛星 2024】</div>
        <div>応答願ウ 涙ト雲ノ向コウ</div>
        <div>虹ノ隙間ニ 目ヲ凝ラシタ</div>
        <hr />
        <div class="card-actions flex flex-col">
          <div class="font-semibold">Login With:</div>
          <button
            class="btn glass btn-block flex justify-between text-white"
            disabled
            @ckick="tryDemo()"
          >
            <div>
              <i class="bi bi-person-fill"></i>
              Demo
            </div>
            <span class="badge">未実装</span>
          </button>
          <button
            class="btn btn-block flex justify-start bg-green-500 text-white"
            @click="loginWithSpotify()"
          >
            <div>
              <i class="bi bi-spotify"></i>
              Spotify
            </div>
          </button>
        </div>
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
