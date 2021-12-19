import React from "react"
import DescriptionCard from "../../descriptionCard"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Link from "next/link"
import BeginnerCard from "./beginner/card"
import IntermediateCard from "./intermediate/card"
import ExpertCard from "./expert/card"
import { useTranslation } from "next-i18next"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    padding: "48px 48px 84px 48px",
    backgroundColor: theme.palette.background.paper,
    "@media (max-width: 797px)": {
      overflowX: "scroll",
    },
    "@media (min-width: 797px)": {
      justifyContent: "center",
    },
  },

  card: {
    padding: "0 36px",
    marginBottom: "60px",
  },
  title: {
    "@media (max-width: 769px)": {
      padding: "84px 30px 0 30px",
    },
    "@media (min-width: 769px) and (max-width: 1115px)": {
      paddingTop: "84px",
      paddingRight: "calc(160px / 2)",
      paddingLeft: "calc(160px / 2)",
    },
    "@media (min-width: 1115px)": {
      paddingTop: "84px",
      paddingRight: "calc((100% - 845px) / 2)",
      paddingLeft: "calc((100% - 845px) / 2)",
    },
  },
}))

export default function App() {
  const { root, card, title } = useStyles()
  const mobile = useMediaQuery("(max-width:600px)")
  const { t } = useTranslation("homepage")

  return (
    <React.Fragment>
      <div className={title}>
        <Typography variant="h5">{t("cardTitle")}</Typography>
      </div>
      <div className={root}>
        <Link href="/guides" passHref>
          <BeginnerCard className={card} />
        </Link>
        <Link href="/blog" passHref>
          <IntermediateCard className={card} />
        </Link>
        <ExpertCard className={card} />
      </div>
      <Grid container></Grid>
    </React.Fragment>
  )
}
