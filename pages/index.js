import React from "react"
import Articles from "../components/articles"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Banner from "../components/HomePage/banner"
import Cards from "../components/HomePage/description-cards"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Typography } from "@material-ui/core"
import { Grid } from "@material-ui/core"

const Home = ({ articles, categories, homepage, blog }) => {
  return (
    <React.Fragment>
      <Banner />
      <Grid container>
        <Grid item xs={6}></Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1">
            We believe the financial system should be built to work for
            everyone, especially Blockchain. For the first time in history, with
            crypto currencies, people can trust each. We aim to make crypto
            trading accessible to anyone, anywhere, anytime and reduce
            dependency on traditional financial institutions. Not because we
            want, but because we can. Therefore, we create guides, publish
            articles and post memes that let you start investing at your own
            pace, on your own terms. Access live charts, daily updates and
            follow us on social media so we keep you in the loop. It’s not the
            moon we want you to reach, but the stars. It’s about exploring the
            universe together. Buckle up and enjoy the flight.
          </Typography>
        </Grid>
      </Grid>

      <Cards />
      {/* <Seo seo={homepage.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage.hero.title}</h1>
          <Articles articles={articles} />
        </div>
      </div>*/}
    </React.Fragment>
  )
}

export async function getStaticProps({ locale }) {
  // Run API calls in parallel
  const [articles, categories, homepage, blog] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/blog"),
  ])

  return {
    props: {
      ...(await serverSideTranslations(locale, ["homepage", "footer"])),
      articles,
      categories,
      homepage,
      blog,
    },
    revalidate: 1,
  }
}

export default Home
