import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import Link from "next/link"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  title: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    minHeight: "96px",
    "@supports (-webkit-line-clamp: 3)": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "initial",
      display: "-webkit-box",
      "-webkit-line-clamp": "3",
      "-webkit-box-orient": "vertical",
    },
    content: {
      minHeight: "96px",
    },
  },
})

export default function App({ guide }) {
  const mobile = useMediaQuery("(max-width:960px)")
  const { root, title, content } = useStyles()
  return (
    <Link as={`/guides/${guide.slug}`} href={"/guides/[slug]"} passHref>
      {/* {      <Card className={root}>
        <CardActionArea>
          <CardMedia title="img">{<NextImage image={guide.image} />}</CardMedia>
          <CardContent className={content}>
            <Typography variant="h6" color="textPrimary" className={title}>
              {guide.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>} */}
      <Card className={root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="img"
            height="180"
            image={guide.image.url}
            title="img"
          />
          <CardContent>
            <Typography gutterBottom variant={mobile ? "h6" : "h5"}  className={title}>
              {guide.title}
            </Typography>
            {/* {<Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>} */}
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}
