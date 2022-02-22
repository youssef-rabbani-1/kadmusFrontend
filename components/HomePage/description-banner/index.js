import React from "react"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import NextImage from "../../image"
import clsx from "clsx"
import { motion } from "framer-motion"
import { PinDropSharp, SportsRugbySharp } from "@material-ui/icons"
import Link from "next/link"
import Button from "@material-ui/core/Button"
const useStyles = makeStyles((theme) => ({
  sectionPadding0: {
    padding: "0",
  },
  sectionPadding1: {
    padding: "48px",
    "@media (min-width: 900px)": {
      padding: "48px 330px",
    },
  },
  padding3: {
    paddingTop: "60px !important",
    paddingBottom: "60px !important",
  },
  mobileRoot: {
    // "@media (max-width: 900px)": {
    height: "100vh",
    // },
  },
  text: {
    lineHeight: "1.8",
    color: "#fff",
    textAlign: "center",
    marginBottom: "48px",
    //color: "#000",
  },
  root: {
    justifyContent: "space-evenly",
    padding: "0px",
  },
  parent: { position: "relative" },
  child: {
    zIndex: "1000",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    boxShadow: "inset 0 0 0 1000px rgba(0,0,0,.5)",
  },
  imgContainer: {
    height: "100vh",
  },
  image: {
    height: "100%",
  },
  cta: {
    color: theme.palette.common.white,
    background: "#477cd4",
    borderRadius: "25px",
    width: "fit-content",
    height: "45px",
  },
}))
const levels = [
  {
    text: "Learn the necessary skills to boost your trading and make the proper investments through our strategies.",
    bkgd: "#477cd4",
    cta: "Start Now",
    link: "/guides",
    image: {
      height: "800",
      width: "1199",
      url: "https://res.cloudinary.com/darina-zein-kadmus/image/upload/v1644509476/learning_33f6eb5a57.jpg",
    },
  },
  {
    text: "Get the latest Cryptocurrency news! Stay up to date with the latest trends and maximize your gains by keeping up to date with the Cadmus newsletter",
    bkgd: "#1d32b2",
    cta: "Get the latest news",
    link: "/blog",
    image: {
      height: "800",
      width: "1199",
      url: "https://res.cloudinary.com/darina-zein-kadmus/image/upload/v1643877165/stock_market_6693060_960_720_8d229d5452.png",
    },
  },
  {
    text: "Dive deep into Cryptocurrencies. Cadmus provides detailed information on the the major cryptocurries with live tradig prices.",
    bkgd: "#0385e6",
    cta: "Learn More",
    link: "/prices",
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
    sectionPadding0,
    sectionPadding1,
    padding3,
    child,
    text,
    root,
    image,
    cta,
    imgContainer,
  } = useStyles()
  const mobile = useMediaQuery("(max-width:900px)")

  return levels.map((level, index) => {
    return (
      <Grid key={level.text} container className={clsx(root)}>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          xs={12}
          className={clsx(mobileRoot, sectionPadding1, child)}
          style={{ backgroundImage: `url(${level.image.url})` }}
        >
          <Typography className={clsx(text)} variant="h5">
            {level.text}
          </Typography>
          <div>
            <Link href={level.link} passHref>
              <Button size="medium" variant="contained" className={cta}>
                {level.cta}
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    )
  })
}
/*
  return levels.map((level, index) => {
    return mobile ? (
      <Grid key={level.text} container className={clsx(root)}>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          className={clsx(mobileRoot, sectionPadding1, child)}
          style={{ backgroundImage: `url(${level.image.url})` }}
        >
          <Typography className={clsx(text)} variant="h5">
            {level.text}
          </Typography>
        </Grid>
      </Grid>
    ) : (
      <Grid key={level.text} container alignItems="center" className={root}>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={5}
          className={clsx(sectionPadding1)}
          style={{}}
        >
          <Typography className={text} variant="h5">
            {level.text}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={imgContainer}>
            <NextImage image={level.image} className={image} />
          </div>
        </Grid>
      </Grid>
    )
  })
}


*/
export default App
