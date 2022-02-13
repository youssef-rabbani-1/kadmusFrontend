import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Link from "next/link"
import NextImage from "./image"

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
  const { root, title, content } = useStyles()
  return (
    <Link as={`/guides/${guide.slug}`} href={"/guides/[slug]"} passHref>
      <Card className={root}>
        <CardActionArea>
          <CardMedia title="img">{<NextImage image={guide.image} />}</CardMedia>
          <CardContent className={content}>
            <Typography variant="h6" color="textPrimary" className={title}>
              {guide.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}
