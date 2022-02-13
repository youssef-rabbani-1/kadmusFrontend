import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"

const Image = ({ image, style }) => {
  const { url, alternativeText } = image
  const loader = () => {
    return getStrapiMedia(image)
  }
  return (
      <NextImage
        loader={loader}
        layout="responsive"
        width={image.width}
        height={image.height}
        objectFit="cover"
        src={url}
        id={image.id}
        alt={alternativeText || ""}
      />
  )
}

export default Image
