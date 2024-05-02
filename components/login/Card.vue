<template>
  <div>
    <div class="card card-compact w-96 border shadow-xl">
      <figure>
        <img
          src="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b2838e7afa9a2f67a36f1_105.png"
          alt="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b2838e7afa9a2f67a36f1_105.png"
        />
      </figure>
      <div class="card-body">
        <div class="card-title justify-center">
          <h2>Voyger</h2>
        </div>
        <hr />
        <div>Spotify APIを使って、アクティビティを可視化するWebアプリです。</div>
        <br />
        <div>応答願ウ 涙ト雲ノ向コウ</div>
        <div>虹ノ隙間ニ 目ヲ凝ラシタ</div>
        <hr />
        <div class="card-actions items-center justify-center">
          <div>Login With:</div>
          <button
            class="btn btn-primary"
            disabled
            @click="tryDemo()"
          >
            <i class="bi bi-person-fill me-2"></i>
            <span>Demo</span>
          </button>
          <button
            class="btn btn-success"
            @click="loginWithSpotify()"
          >
            <i class="bi bi-spotify me-2"></i>
            <span>Spotify</span>
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
