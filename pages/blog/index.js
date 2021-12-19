import React from "react"
import { Grid, Typography } from "@material-ui/core"
import Articles from "../../components/articles"
import { makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Seo from "../../components/seo"
import { fetchAPI } from "../../lib/api"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 4em",
    "@media (max-width: 600px)": {
      padding: "0 12px",
    },
  },
  title: {
    padding: "3em",
  },
  body: {
    minHeight: "70vh",
  },
}))

const App = ({ articles, categories, homepage, blog }) => {
  const mobile = useMediaQuery("(max-width:600px)")
  const { root, title, body } = useStyles()
  return (
    <div className={root}>
      <Seo seo={homepage.seo} />
      <Grid container className={title}>
        <Grid
          container
          item
          xs={12}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant={mobile ? "h4" : "h2"}>
            {blog.hero.title}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={mobile ? 2 : 6} className={body}>
        <Articles articles={articles} />
      </Grid>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  // Run API calls in parallel
  const [articles, categories, homepage, blog] = await Promise.all([
    fetchAPI(`/articles?_locale=${locale.toString().substring(0, 2)}`),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/blog"),
  ])

  return {
    props: {
      ...(await serverSideTranslations(locale, ["footer"])),
      articles,
      categories,
      homepage,
      blog,
    },
    revalidate: 1,
  }
}

export default App
