import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import { useTranslation } from "next-i18next"
import Link from "next/link"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1d32b2",
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
    description: t("card2"),
  }
  return (
    <Link href="/blog" passHref>
      <Card className={root} elevation={0}>
        <CardContent>
          <Typography variant="h5" component="p" className={text}>
            {data.description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}
