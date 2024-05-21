<template>
  <div>
    <div class="card glass card-compact bg-violet-900">
      <div class="card-body">
        <div class="flex items-center justify-between">
          <h2 class="card-title">ライブ情報</h2>
        </div>
        <div v-if="!pending && error === null">
          <div>あなたが気になるアーティストのライブ情報を検索してみましょう。</div>
          <div>結果はAIで生成しているため、誤った情報を含む場合があります。</div>
        </div>
      </div>
      <figure>
        <div v-if="pending">
          <span class="loading loading-spinner mx-2 my-2"></span>
        </div>
        <div v-else-if="error !== null">
          <div class="mx-2 my-2 flex flex-col">
            <div
              role="alert"
              class="alert border-2 border-error text-left"
            >
              <div class="text-sm text-error">
                <div>ライブ情報の取得に失敗しました。</div>
                <div>statusCode: {{ errorStatusCode }}</div>
                <div>statusMessage: {{ errorStatusMessage }}</div>
              </div>
            </div>
            <img
              src="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b23d77bff26120f06097d_056.png"
              alt="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b23d77bff26120f06097d_056.png"
            />
          </div>
        </div>
        <div
          v-else
          class="max-h-96 min-w-full overflow-x-auto bg-neutral"
        >
          <div class="mockup-code">
            <pre
              data-prefix="$"
            ><code>ASIAN KUNG-FU GENERATION、BUMP OF CHICKEN、amazarashiの最新のライブ情報(公演名のみ)を教えてください。</code></pre>
            <pre
              data-prefix=">"
              class="text-warning"
            ><code>installing...</code></pre>
            <pre
              data-prefix=">"
              class="text-success"
            ><code>Done!</code></pre>
          </div>
        </div>
      </figure>
      <div
        v-if="!pending && error === null"
        class="card-body"
      >
        <div>参加したいライブ情報は見つかりましたか？</div>
        <div>参加したいライブは, 必ずチケットを手に入れましょう！</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import OpenAI from "openai"

  const supabaseSession = useSupabaseSession()

  const spotifyRequestType: Ref<string> = ref("artists")
  const spotifyRequestTimeRange: Ref<string> = ref("medium_term")
  const spotifyRequestLimit: Ref<number> = ref(3)
  const spotifyRequestOffset: Ref<number> = ref(0)

  const spotifyRequestQuery = computed(() => {
    return {
      time_range: spotifyRequestTimeRange.value,
      limit: spotifyRequestLimit.value.toString(),
      offset: spotifyRequestOffset.value.toString()
    }
  })

  const liveInformationSearchPrompt = ref("")

  const errorStatusCode: Ref<number> = ref(400)
  const errorStatusMessage: Ref<string> = ref("")

  const { data, pending, error } = await useLazyFetch("https://api.spotify.com/v1/me/top/" + spotifyRequestType.value, {
    query: spotifyRequestQuery,
    headers: { authorization: "Bearer" + " " + (supabaseSession.value?.provider_token ?? "") },
    pick: ["items"],
    watch: [spotifyRequestQuery]
  })

  watch(data, async (): Promise<void> => {
    // console.dir(data.value.items)
    if (data.value !== null) {
      const artistsNames = data.value.items.map((item) => {
        return item.name
      })
      liveInformationSearchPrompt.value = artistsNames.join("、") + "の最新のライブ情報(公演名のみ)を教えてください。"

      const openai = new OpenAI()

      async function main() {
        const completion = await openai.chat.completions.create({
          messages: [{ role: "system", content: "You are a helpful assistant." }],
          model: "gpt-3.5-turbo"
        })

        console.log(completion.choices[0])
      }

      main()
    }
  })
  watch(error, async (): Promise<void> => {
    console.error("アーティストランキングの取得に失敗しました。")
    console.error(error.value)

    errorStatusCode.value = error.value?.statusCode ?? 400
    if (errorStatusCode.value === 400) {
      errorStatusMessage.value = "Bad Request"
      await loginWithSpotify()
    } else if (errorStatusCode.value === 401) {
      errorStatusMessage.value = "Unauthorized"
      await loginWithSpotify()
    } else if (errorStatusCode.value === 403) {
      errorStatusMessage.value = "Forbidden"
    } else if (errorStatusCode.value === 429) {
      errorStatusMessage.value = "Too Many Requests"
    }
  })
</script>
