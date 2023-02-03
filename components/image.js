import { getStrapiMedia } from "../lib/media"
import NextImage from "next/image"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    width: "100%",
    height:"100%"
  },

  img: {
    maxHeight:"100%",
    maxWidth:"100%"
  },
}))
const Image = ({ image, style }) => {
  const { img, imageContainer } = useStyles()
  const { url, alternativeText } = image
  const loader = () => {
    return getStrapiMedia(image)
  }
  return (
    <div className={imageContainer}>
      <img src={url} alt="Girl in a jacket" className={img}></img>
      {/* {<NextImage
        loader={loader}
        layout="responsive"
        width={image.width}
        height="650"
        objectFit="cover"
        src={url}
        id={image.id}
        alt={alternativeText || ""}
        className={img}
      />} */}
    </div>
  )
}

export default Image
