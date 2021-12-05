import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.third,
    minWidth: 200,
    maxWidth: 225,
    minHeight: 297,
    marginRight: "48px",
  },
  text: {
    color: theme.palette.primary.main,
  },
}))

export default function App({}) {
  const { root, text } = useStyles()

  const data = {
    description:
      "I want to understand how each coin works and what is so special about it.",
  }
  return (
    <Card className={root} elevation={0}>
      <CardContent>
        <Typography variant="h5" component="p" className={text}>
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  )
}