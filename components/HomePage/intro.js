import React from "react"
import { Typography } from "@material-ui/core"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import Image from "next/image"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 24px",
  },
  title: {
    marginBottom: "36px",
  },
  info: {
    textAlign: "center",
  },
  text: {
    lineHeight: "1.9",
  },
}))

function App() {
  const { root, title, info, text } = useStyles()

  return (
    <Grid
      container
      className={root}
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        xs={12}
        className={title}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h4"
          display="inline"
          fontWeight="fontWeightRegular"
        >
          What is
        </Typography>
        <Typography variant="h4" display="inline">
          {" "}
          Cadmus?
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} className={info}>
        <Typography variant="body1" className={text}>
          We believe the financial system should be built to work for everyone,
          especially Blockchain. For the first time in history, with crypto
          currencies, people can trust each. We aim to make crypto trading
          accessible to anyone, anywhere, anytime and reduce dependency on
          traditional financial institutions. Not because we want, but because
          we can. Therefore, we create guides, publish articles and post memes
          that let you start investing at your own pace, on your own terms.
          Access live charts, daily updates and follow us on social media so we
          keep you in the loop. It’s not the moon we want you to reach, but the
          stars. It’s about exploring the universe together. Buckle up and enjoy
          the flight.
        </Typography>
      </Grid>
    </Grid>
  )
}
export default App
