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

    "@supports (-webkit-line-clamp: 3)": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "initial",
      display: "-webkit-box",
      "-webkit-line-clamp": "3",
      "-webkit-box-orient": "vertical",
    },
  },
})

export default function App({ guide }) {
  const classes = useStyles()
  return (
    <Link as={`/guides/${guide.slug}`} href={"/guides/[id]"}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia title="img">{<NextImage image={guide.image} />}</CardMedia>
          <CardContent>
            <Typography
              variant="h6"
              color="textPrimary"
              className={classes.title}
            >
              {guide.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/*<CardActions>
      
      </CardActions>*/}
      </Card>
    </Link>
  )
}
