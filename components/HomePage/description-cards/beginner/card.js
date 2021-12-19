import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { useTranslation } from "next-i18next"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#477cd4",
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
  const { t } = useTranslation("homepage")

  const data = {
    description: t("card1"),
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
