import React from "react"
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import NextImage from "../../components/image"
import Seo from "../../components/seo"
import { getStrapiMedia } from "../../lib/media"
import { Grid, Typography, makeStyles } from "@material-ui/core"
import LinkRenderer from "../../components/renderers/LinkRenderer"
import HeaderRenderer from "../../components/renderers/HeaderRenderer"
import BodyRenderer from "../../components/renderers/BodyRenderer"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "12px",
  },
  container: {},
  image: {
    padding: "0 !important",
  },
}))

const Article = ({ article, categories, locale }) => {
  const { root, container, image } = useStyles()

  const imageUrl = getStrapiMedia(article.image)

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  }

  return (
    <div className={root}>
      <Seo seo={seo} />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container item xs={12} lg={8} spacing={6}>
          <Grid item xs={12}>
            <Typography variant="h3">{article.title}</Typography>
            {article.description ? (
              <Typography variant="h6" color="textSecondary">
                {article.description}
              </Typography>
            ) : null}
            {article.author.name ? (
              <Typography variant="subtitle2">
                By {article.author.name} |{" "}
                {<Moment format="MMM Do YYYY">{article.published_at}</Moment>}
              </Typography>
            ) : null}
          </Grid>

          <Grid item xs={12} lg={8} className={image}>
            <NextImage image={article.image} />
          </Grid>
          <Grid item xs={12}>
            <ReactMarkdown
              renderers={{
                link: LinkRenderer,
                heading: HeaderRenderer,
                paragraph: BodyRenderer,
              }}
              source={article.content}
              escapeHtml={false}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

/*export async function getStaticPaths() {
  const enArticles = await fetchAPI("/articles")
  let definedPaths = []

  enArticles.forEach((article) => {
    definedPaths.push({
      id: article.id.toString(),
      locale: "en-US",
    })
    article.localizations.forEach((locale) => {
      definedPaths.push({
        id: locale.id.toString(),
        locale: locale.locale,
      })
    })
  })
  return {
    paths: definedPaths.map((path) => ({
      params: {
        id: path.id.toString(),
        locale: "en-US",
      },
    })),
    fallback: false,
  }
}*/

export async function getServerSideProps({ params, locale }) {
  const [article, categories] = await Promise.all([
    locale == "en-US"
      ? fetchAPI(`/articles?id=${params.id.toString()}`)
      : fetchAPI(`/articles?_locale=${locale}&id=${params.id.toString()}`),
    fetchAPI("/categories"),
  ])
  return {
    props: {
      ...(await serverSideTranslations(locale, ["footer"])),
      article: article[0],
      categories,
      locale,
    },
  }
}

export default Article
