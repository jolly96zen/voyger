<template>
  <div>
    <div
      v-if="error !== undefined"
      class="alert alert-danger border border-danger border-2"
      role="alert"
    >
      ログインに失敗しました。
    </div>
    <div
      class="card border-light"
      style="width: 20rem"
    >
      <img
        src="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b2838e7afa9a2f67a36f1_105.png"
        alt="603c87adb15be3cb0b3ed9b5/662b2838e7afa9a2f67a36f1_105.png"
        class="card-img-top"
      />
      <div class="card-body">
        <h2 class="card-title">Voyger</h2>
        <hr />
        <div class="card-text">ライブ狂いのためのWebアプリ</div>
        <ul>
          <li class="card-text">ライブ情報の取得</li>
          <li class="card-text">ライブ参戦の計画</li>
          <li class="card-text">代金支払いの管理</li>
        </ul>
        <div class="card-text">とかができたら良い</div>
        <br />
        <div class="card-text">応答願ウ 心ノ裏側ヲ</div>
        <div class="card-text">グルリト回リ 戻ッテキタ</div>
      </div>
      <div class="card-body">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <button
                type="button"
                class="btn btn-outline-primary border border-primary border-2"
                @click="tryDemo()"
              >
                Try Demo
              </button>
            </div>
            <div class="col">
              <button
                type="button"
                class="btn btn-outline-success border border-success border-2"
                @click="loginWithGoogle()"
              >
                With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { FirebaseError } from "firebase/app"
  import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

  definePageMeta({
    layout: "center"
  })
  useHead({
    title: "login"
  })

  const error: Ref<FirebaseError | undefined> = ref()

  const auth = useFirebaseAuth()
  const googleAuthProvider = new GoogleAuthProvider()

  const userStore = useUserStore()
  const { setIsLoggedin, setIsAnonymousUser } = userStore

  const tryDemo = (): void => {
    error.value = undefined

    setIsLoggedin(true)
    setIsAnonymousUser(true)
    navigateTo("/dashboard", { external: true })
  }

  const loginWithGoogle = (): void => {
    error.value = undefined

    if (auth !== null) {
      signInWithPopup(auth, googleAuthProvider)
        .then((): void => {
          setIsLoggedin(true)
          setIsAnonymousUser(false)
          navigateTo("/dashboard", { external: true })
        })
        .catch((reason: FirebaseError) => {
          console.error("ログインに失敗しました: ", reason)
          error.value = reason
        })
    }
  }
</script>
