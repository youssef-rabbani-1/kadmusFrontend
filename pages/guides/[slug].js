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
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "12px",
  },
  container: {},
  image: {
    padding: "0 !important",
    marginBottom: "24px",
  },
  content: {
    padding: "24px 48px !important",
  },
}))
const Guide = ({ guide }) => {
  const { root, container, content, image } = useStyles()
  const mobile = useMediaQuery("(max-width:600px)")

  const imageUrl = getStrapiMedia(guide.image)

  const seo = {
    metaTitle: guide.title,
    metaDescription: guide.description,
    shareImage: guide.image,
    guide: true,
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
        <Grid
          container
          item
          xs={12}
          spacing={6}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} className={image}>
            <NextImage image={guide.image} className={container} />
          </Grid>
          <Grid item xs={12} lg={10} className={container}>
            <Typography variant={mobile ? "h4" : "h3"}>
              {guide.title}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {guide.description}
            </Typography>
            <Typography variant="subtitle2">
              By {guide.author.name} |{" "}
              {<Moment format="MMM Do YYYY">{guide.published_at}</Moment>}
            </Typography>
          </Grid>

          <Grid item xs={12} lg={10} className={content}>
            <ReactMarkdown
              renderers={{
                link: LinkRenderer,
                heading: HeaderRenderer,
                paragraph: BodyRenderer,
              }}
              source={guide.content}
              escapeHtml={false}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export async function getStaticPaths() {
  const guides = await fetchAPI("/guides")

  return {
    paths: guides.map((guide) => ({
      params: {
        slug: guide.slug,
      },
    })),
    fallback: false,
  }
}

export async function getServerSideProps({ params, locale }) {
  const guides = await fetchAPI(`/guides?slug=${params.slug}`)
  const categories = await fetchAPI("/categories")

  return {
    props: {
      ...(await serverSideTranslations(locale, ["homepage", "footer"])),
      guide: guides[0],
      categories,
    },
    revalidate: 1,
  }
}

export default Guide
