import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { useTranslation } from "next-i18next"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import NextImage from "../image"

const useStyles = makeStyles((theme) => ({
  padding2: {
    padding: "150px 125px 150px 125px",
    "@media (max-width: 960px)": {
      padding: "0 12px",
    },
  },
  header: {
    lineHeight: "48px",
    color: "#000",
    "@media (max-width: 960px)": {
      padding: "48px",
      textAlign: "center",
      lineHeight: "36px",
      color: "#ffff",
    },
  },
  bottomMargin: {
    //margin: "0 0 84px 0",
  },
  child: {
    zIndex: "1000",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.5)",
  },
  bckgd: {
    //background: "#477cd4",
  },
}))
const img = {
  height: "800",
  width: "1199",
  url: "https://res.cloudinary.com/darina-zein-kadmus/image/upload/v1644509476/learning_33f6eb5a57.jpg",
}
function App() {
  const { t } = useTranslation("guides")
  const mobile = useMediaQuery("(max-width:960px)")
  const { padding2, bottomMargin, bckgd, header, child } = useStyles()
  return mobile ? (
    <React.Fragment>
      <Grid
        item
        xs={12}
        className={clsx(padding2, bottomMargin, bckgd, child)}
        style={{
          backgroundImage: `url("https://res.cloudinary.com/darina-zein-kadmus/image/upload/v1644509476/learning_33f6eb5a57.jpg")`,
        }}
      >
        <Typography variant={mobile ? "h6" : "h5"} className={header}>
          {t("header")}
        </Typography>
      </Grid>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Grid item xs={12} md={6} className={clsx(padding2, bottomMargin, bckgd)}>
        <Typography variant={mobile ? "h6" : "h5"} className={header}>
          {t("header")}
        </Typography>
      </Grid>
      <Grid item xs={6}  style={{
         // backgroundImage: `url("https://res.cloudinary.com/darina-zein-kadmus/image/upload/v1644509476/learning_33f6eb5a57.jpg")`,
        }}>
        {<NextImage image={img} />}
      </Grid>
    </React.Fragment>
  )
}
export default App
