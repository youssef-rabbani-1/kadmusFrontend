import { getStrapiURL } from "./api"

export function getStrapiMedia(media) {
  console.log(media)
  const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url
  return imageUrl
}
