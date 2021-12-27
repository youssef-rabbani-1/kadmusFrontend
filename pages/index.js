import React from "react"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Banner from "../components/HomePage/banner"
import Cards from "../components/HomePage/description-cards"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Typography } from "@material-ui/core"
import { Grid } from "@material-ui/core"
import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/styles"
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 24px",
  },
  title: {
    marginBottom: "12px",
  },
}))

const Home = ({ articles, categories, homepage, blog }) => {
  const { root, title } = useStyles()
  return (
    <React.Fragment>
      <Banner />
      <Grid container className={root}>
        <Grid item xs={6}></Grid>
        <Grid md={6}>
          <div className={title}>
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
          </div>
          <Typography variant="body1">
            We believe the financial system should be built to work for
            everyone, especially Blockchain.
            <br /> For the first time in history, with crypto currencies, people
            can trust each.
            <br /> We aim to make crypto trading accessible to anyone, anywhere,
            anytime and reduce dependency on traditional financial institutions.
            <br /> Not because we want, but because we can. Therefore, we create
            guides, publish articles and post memes that let you start investing
            at your own pace, on your own terms.
            <br /> Access live charts, daily updates and follow us on social
            media so we keep you in the loop.
            <br /> It’s not the moon we want you to reach, but the stars. It’s
            about exploring the universe together. Buckle up and enjoy the
            flight.
          </Typography>
        </Grid>
      </Grid>

      <Cards />
    </React.Fragment>
  )
}

export async function getServerSideProps({ locale }) {
  // Run API calls in parallel
  const [categories, homepage] = await Promise.all([
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ])

  return {
    props: {
      ...(await serverSideTranslations(locale, ["homepage", "footer"])),
      categories,
      homepage,
    },
  }
}

export default Home
