import React from "react"
import { Grid, Typography, Button, makeStyles } from "@material-ui/core"
import NextImage from "../image"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    padding: "0 4em",
    "@media (max-width: 600px)": {
      padding: "0 12px",
    },
    height: "600px",
  },
  body: {
    height: "300px"
  },
  mainTitle: {
    paddingTop: "100px",
  },
  coloredTitle: {
    color: "linear-gradient(to right, #ff29e6, #ac47ff)",
  },
  coloredText: {
    background: "-webkit-linear-gradient(left, #ff29e6, #ac47ff)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  gradientButton: {
    background: "-webkit-linear-gradient(left, #ff29e6, #ac47ff)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
}))
export default function App() {
  const { root, title, body, coloredTitle, coloredText, gradientButton } =
    useStyles();

  return (
    <Grid
      container
      className={root}
      direction="row"
      justifyContent="center"
      alignItems="center">
      <Grid
        container
        item
        xs={12}
        md={6}
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={body}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary">
            Change Your Life
            <br />
            <span className={coloredTitle}>with Cryptocurrency</span>
          </Typography>
          <Typography variant="body1" className={coloredText}>
            Change your life by taking the leap into Cryptocurrencies, NFT and
            DeFi
          </Typography>
        </Grid>
        <Grid container>
          <Grid item xs={6} md={4}>
            <Button size="medium" className={gradientButton}>
              Learn More
            </Button>
          </Grid>
          <Grid item xs={6} md={4}>
            <Button size="medium" variant="contained" color="secondary">
              Contact Us
            </Button>
          </Grid>
        </Grid>

      </Grid>
      <Grid item xs={12}md={6}>
        {/*<NextImage image={article.image} />*/}
      </Grid>
    </Grid>
  )
}
