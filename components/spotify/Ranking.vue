<template>
  <div>
    <div class="card glass card-compact bg-teal-900">
      <div class="card-body">
        <h2 class="card-title">ランキング</h2>
        <div v-if="!pending && error === null">
          <div>あなたがよく聞くアーティストのランキングです。</div>
        </div>
      </div>
      <figure>
        <div v-if="pending">
          <span class="loading loading-spinner mx-2 my-2"></span>
        </div>
        <div v-else-if="error !== null">
          <div class="mx-2 my-2 flex flex-col">
            <NuxtImg
              src="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b23d77bff26120f06097d_056.png"
              alt="https://assets-global.website-files.com/603c87adb15be3cb0b3ed9b5/662b23d77bff26120f06097d_056.png"
            />
            <div
              role="alert"
              class="alert border-2 border-error text-left"
            >
              <div class="text-sm text-error">
                <div>アーティストランキングの取得に失敗しました。</div>
                <div>しばらく時間を空けてから、アプリをリロードしてください</div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-else
          class="min-w-full overflow-x-auto bg-neutral"
        >
          <table class="table table-zebra">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Followers</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in data.items"
                :key="item.id"
              >
                <td>{{ index + 1 }}</td>
                <td>
                  <div class="flex items-center gap-2">
                    <div class="avatar">
                      <div class="mask mask-squircle h-8 w-8">
                        <NuxtImg
                          :src="item.images[0].url"
                          alt="Artist Image"
                        />
                      </div>
                    </div>
                    <div>
                      {{ item.name }}
                    </div>
                  </div>
                </td>
                <td>{{ item.popularity }}</td>
                <td>{{ item.followers.total }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </figure>
      <div
        v-if="!pending && error === null"
        class="card-body"
      >
        <div>結果は予想通りでしたか？それとも意外でしたか？</div>
        <div>SNSでランキングを共有してみましょう。</div>
        <div class="card-actions justify-end">
          <button
            class="btn btn-primary btn-sm"
            disabled
          >
            Share
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const supabaseSession = useSupabaseSession()

  const spotifyRequestType: Ref<string> = ref("artists")
  const spotifyRequestTimeRange: Ref<string> = ref("medium_term")
  const spotifyRequestLimit: Ref<number> = ref(10)
  const spotifyRequestOffset: Ref<number> = ref(0)

  const { data, pending, error } = await useLazyFetch("https://api.spotify.com/v1/me/top/" + spotifyRequestType.value, {
    query: {
      time_range: spotifyRequestTimeRange.value,
      limit: spotifyRequestLimit.value.toString(),
      offset: spotifyRequestOffset.value.toString()
    },
    headers: { authorization: "Bearer" + " " + (supabaseSession.value?.provider_token ?? "") },
    pick: ["items"]
  })

  watch(data, (): void => {
    // console.dir(data.value.items)
  })
  watch(error, (): void => {
    console.error("アーティストランキングの取得に失敗しました。")
    console.error(error.value)
  })
</script>
