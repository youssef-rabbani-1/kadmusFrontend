import React from "react"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import NextImage from "../../image"
import clsx from "clsx"
import { motion } from "framer-motion"
import { PinDropSharp, SportsRugbySharp } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
  section: {
    "@media (min-width: 600px)": {
      //borderRadius: "50% 0% 46% 0% / 50% 81% 38% 71%",
    },
  },
  sectionPadding0: {
    padding: "0",
  },
  sectionPadding1: {
    padding: "48px",
  },
  padding3: {
    paddingTop: "60px !important",
    paddingBottom: "60px !important",
  },
  mobileRoot: {
    "@media (max-width: 900px)": {
      height: "100vh",
    },
  },
  text: {
    lineHeight: "1.8",
    "@media (max-width: 900px)": {
      color: "#fff",
      textAlign: "center",
    },
    color: "#000",
  },
  root: {
    justifyContent: "space-evenly",
    padding: "0px 84px",
    "@media (max-width: 900px)": {
      padding: "0",
    },
  },
  roundedBorder: {
    borderRadius: "25px",
    overflow: "hidden",
  },
  parent: { position: "relative" },
  child: {
    zIndex: "1000",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.5)",
  },
}))
const levels = [
  {
    text: "Learn the necessary skills to boost your trading and make the proper investments through our strategies.",
    bkgd: "#477cd4",
    image: {
      height: "800",
      width: "1199",
      url: "https://res.cloudinary.com/darina-zein-kadmus/image/upload/v1644509476/learning_33f6eb5a57.jpg",
    },
  },
  {
    text: "Get the latest Cryptocurrency news! Stay up to date with the latest trends and maximize your gains by keeping up to date with the Cadmus newsletter",
    bkgd: "#1d32b2",
    image: {
      height: "800",
      width: "1199",
      url: "https://res.cloudinary.com/darina-zein-kadmus/image/upload/v1643877165/stock_market_6693060_960_720_8d229d5452.png",
    },
  },
  {
    text: "Dive deep into Cryptocurrencies. Cadmus provides detailed information on the the major cryptocurries with live tradig prices.",
    bkgd: "#0385e6",
    image: {
      height: "800",
      width: "1199",
      url: "https://res.cloudinary.com/darina-zein-kadmus/image/upload/v1644510462/prices_e0ecfb5964.jpg",
    },
  },
]
function App() {
  const {
    mobileRoot,
    section,
    sectionPadding0,
    sectionPadding1,
    padding3,
    child,
    text,
    root,
    roundedBorder,
  } = useStyles()
  const mobile = useMediaQuery("(max-width:900px)")

  return levels.map((level, index) => {
    return mobile ? (
      <Grid key={level.text} container className={clsx(root)}>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          className={clsx(mobileRoot, section, sectionPadding1, child)}
          style={{ backgroundImage: `url(${level.image.url})` }}
        >
          <Typography className={clsx(text)} variant="h5">
            {level.text}
          </Typography>
        </Grid>
        {/*<Grid item xs={12} className={clsx(section)}>
          <NextImage image={level.image} paddingTop="66.6%" />
        </Grid>*/}
      </Grid>
    ) : index % 2 == 1 ? (
      <Grid
        container
        alignItems="center"
        key={level.text}
        /*component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}*/
        className={clsx(root)}
      >
        <Grid item xs={12} md={6} className={clsx(section)}>
          <div className={roundedBorder}>
            <NextImage image={level.image} paddingTop="66.6%" />
          </div>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          item
          xs={12}
          md={5}
          className={clsx(sectionPadding1)}
          style={{}}
        >
          <Typography className={text} variant="h5">
            {level.text}
          </Typography>
        </Grid>
      </Grid>
    ) : (
      <Grid
        key={level.text}
        container
        alignItems="center"
        /*component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}*/
        className={root}
      >
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={5}
          className={clsx(section, sectionPadding1)}
          style={{}}
        >
          <Typography className={text} variant="h5">
            {level.text}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className={(section, sectionPadding1)}>
          <div className={roundedBorder}>
            <NextImage
              image={level.image}
              className={(section, sectionPadding1)}
              paddingTop="66.6%"
            />
          </div>
        </Grid>
      </Grid>
    )
  })
}
export default App
