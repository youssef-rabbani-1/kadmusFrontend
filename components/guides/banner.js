import React from "react"
import { Grid, Typography, Button, makeStyles } from "@material-ui/core"
import NextImage from "../image"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import ReactPlayer from "react-player"
import { useTranslation } from "next-i18next"

const useStyles = makeStyles((theme) => ({
  root: {
    //marginBottom: "36px",
    backgroundColor: theme.palette.background.default,
    padding: "0",
    "& video": {
      objectFit: "cover",
    },
    height: "100vh",
    position: "relative",
  },
  bannerText: {
    textAlign: "center",
    marginBottom: "48px",
  },
  body: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    height: "100%",
    padding: "0 48px",
    "@media (max-width: 600px)": {
      padding: "0 24px",
    },
  },
  title: {
    marginBottom: "24px",
  },
  mainTitle: {
    paddingTop: "100px",
  },
  coloredTitle: {
    color: "linear-gradient(to right, #ff29e6, #ac47ff)",
  },
  secondaryText: {
    color: theme.palette.common.white,
  },
  cta: {
    color: theme.palette.common.white,
    background: "#477cd4",
  },
}))
export default function App() {
  const { root, bannerText, title, coloredTitle, body, secondaryText, cta } =
    useStyles()
  const mobile = useMediaQuery("(max-width:600px)")
  const { t } = useTranslation("guides")
  return (
    <Grid
      container
      className={root}
      justifyContent="center"
      alignItems="center"
    >
      <ReactPlayer
        url={
          "https://res.cloudinary.com/darina-zein-kadmus/video/upload/v1641654865/guides_banner_video_145d7dace0.mp4"
        }
        playing
        loop
        muted
        playsinline
        width="100%"
        height="100%"
      />
      <Grid
        container
        item
        xs={12}
        justifyContent="center"
        alignItems="center"
        className={body}
      >
        <Grid
          container
          item
          justifyContent="center"
          alignItems="center"
          xs={12}
        >
          <Grid item xs={12} className={bannerText}>
            <Typography variant="h3" color="primary" className={title}>
              {t("banner")}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
