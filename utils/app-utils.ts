import * as htmlToImage from "html-to-image"

export const shareImageOnSNS = async (
  targetElementID: string,
  shareDataTitle: string | undefined,
  shareDataText: string | undefined,
  shareDataURL: string | undefined
): Promise<void> => {
  const requestURL = useRequestURL()

  const targetElement = document.getElementById(targetElementID)
  if (targetElement !== null) {
    await htmlToImage
      .toBlob(targetElement)
      .then(async (blob): Promise<void> => {
        if (blob !== null) {
          const shareData = {
            title: shareDataTitle ?? "Voyager",
            text: shareDataText ?? "",
            url: shareDataURL ?? requestURL.origin,
            files: [
              new File([blob], "share-image.png", {
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
