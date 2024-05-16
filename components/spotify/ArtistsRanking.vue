<template>
  <div>
    <div class="card glass card-compact bg-teal-900">
      <div class="card-body">
        <div class="flex items-center justify-between">
          <h2 class="card-title">ランキング</h2>
          <ul
            id="artrank-menu"
            class="menu menu-horizontal menu-sm p-0"
            @click="updateSpotifyRequestTimeRange"
          >
            <li>
              <a name="short_term">4週間</a>
            </li>
            <li>
              <a
                name="medium_term"
                class="active"
              >
                6ヵ月間
              </a>
            </li>
            <li>
              <a name="long_term">1年間</a>
            </li>
          </ul>
        </div>
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
            <div
              role="alert"
              class="alert border-2 border-error text-left"
            >
              <div class="text-sm text-error">
                <div>アーティストランキングの取得に失敗しました。</div>
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
          <table
            id="shareOnSNSTarget"
            class="table table-zebra table-pin-rows"
          >
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
                        <img
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
            @click="shareOnSNS"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import * as htmlToImage from "html-to-image"

  const requestURL = useRequestURL()

  const supabaseSession = useSupabaseSession()

  const spotifyRequestType: Ref<string> = ref("artists")
  const spotifyRequestTimeRange: Ref<string> = ref("medium_term")
  const spotifyRequestLimit: Ref<number> = ref(10)
  const spotifyRequestOffset: Ref<number> = ref(0)

  const spotifyRequestQuery = computed(() => {
    return {
      time_range: spotifyRequestTimeRange.value,
      limit: spotifyRequestLimit.value.toString(),
      offset: spotifyRequestOffset.value.toString()
    }
  })

  const errorStatusCode: Ref<number> = ref(400)
  const errorStatusMessage: Ref<string> = ref("")

  const { data, pending, error } = await useLazyFetch("https://api.spotify.com/v1/me/top/" + spotifyRequestType.value, {
    query: spotifyRequestQuery,
    headers: { authorization: "Bearer" + " " + (supabaseSession.value?.provider_token ?? "") },
    pick: ["items"],
    watch: [spotifyRequestQuery]
  })

  const updateSpotifyRequestTimeRange = (event) => {
    for (const element of event.currentTarget.getElementsByTagName("a")) {
      element.classList.remove("active")
    }

    event.target.classList.add("active")

    spotifyRequestTimeRange.value = event.target.name ?? ""
  }

  const shareOnSNS = async (): Promise<void> => {
    const targetElement = document.getElementById("shareOnSNSTarget")
    if (targetElement !== null) {
      await htmlToImage
        .toBlob(targetElement)
        .then(async (blob): Promise<void> => {
          if (blob !== null) {
            const shareData = {
              title: "Voyger",
              text: "アーティストランキング",
              url: requestURL.origin,
              files: [
                new File([blob], "artists-ranking.png", {
                  type: "image/png"
                })
              ]
            }

            if (!navigator.canShare) {
              window.alert("利用中のブラウザがWeb Share APIをサポートしていません。")
              console.error("利用中のブラウザがWeb Share APIをサポートしていません。")
              console.error(shareData)
            } else if (navigator.canShare(shareData)) {
              await navigator
                .share(shareData)
                .then((): void => {
                  console.info("データの共有に成功しました:")
                  console.dir(shareData)
                })
                .catch((error): void => {
                  console.error("データの共有に失敗しました:")
                  console.error(error)
                })
            } else {
              window.alert("利用中のブラウザでは指定されたデータは共有できません。")
              console.error("利用中のブラウザでは指定されたデータは共有できません。")
              console.error(shareData)
            }
          } else {
            console.error("ランキング表の画像化に失敗しました。")
          }
        })
        .catch((error): void => {
          console.error("ランキング表の画像化に失敗しました:")
          console.error(error)
        })
    } else {
      console.error("ランキング表が存在しません。")
    }
  }

  watch(data, (): void => {
    // console.dir(data.value.items)
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
