import React from "react"
import { Grid, Typography } from "@material-ui/core"
import Guides from "../../components/guides"
import { makeStyles } from "@material-ui/core/styles"
import Seo from "../../components/seo"
import { fetchAPI } from "../../lib/api"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GlobalContext } from "../_app"
import Banner from "../../components/guides/banner"
import { useTranslation } from "next-i18next"
import clsx from "clsx"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Headline from "../../components/guides/guidesHeader"

const useStyles = makeStyles((theme) => ({
  root: {
    "& video": {
      objectFit: "cover",
    },
  },
  secondaryText: {
    color: theme.palette.common.white,
  },
  padding: {
    padding: "0 4em",
    "@media (max-width: 900px)": {
      padding: "0 12px",
    },
  },
  padding2: {
    padding: "150px 125px 150px 125px",
    "@media (max-width: 900px)": {
      padding: "0 12px",
    },
  },
  bottomMargin: {
    margin: "0 0 84px 0",
  },
  body: {
    minHeight: "90vh",
  },
  header: {
    lineHeight: "48px",
    "@media (max-width: 900px)": {
      lineHeight: "36px",
    },
    color: "#ffff",
  },
  bckgd: {
    background: "#477cd4",
  },
}))

const App = ({ guides, homepage }) => {
  const { navTransparency } = React.useContext(GlobalContext)
  const [navTransparent, setNavTransparent] = navTransparency

  React.useEffect(() => {
    setNavTransparent(true)
  }, [])

  var groupedGuides = guides.reduce(function (obj, guide) {
    var category = guide.category.name

    // If the category doesn't already exist as a key in the object, create it
    if (!obj.hasOwnProperty(category)) {
      obj[category] = []
    }

    // Push the guide to its category key
    obj[category].push(guide)

    // Pass the object on to the next loop
    return obj
  }, {})

  const { t } = useTranslation("guides")

  const { root, body, padding, padding2, bottomMargin, header, bckgd } =
    useStyles()

  const mobile = useMediaQuery("(max-width:900px)")

  return (
    <div>
      {/*<Seo seo={homepage.seo} />*/}
      <div>
        <Grid className={root} container>
          <Banner />
          <Headline />
        </Grid>
        <div className={clsx(padding, body, bottomMargin)}>
          <Guides groupedGuides={groupedGuides} />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps({ locale }) {
  // Run API calls in parallel
  const [guides, homepage] = await Promise.all([
    locale == "en-US"
      ? fetchAPI("/guides?_locale=en")
      : fetchAPI(`/guides?_locale=${locale}`),
    fetchAPI("/homepage"),
  ])
  console.log(locale)

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "homepage",
        "footer",
        "guides",
      ])),
      guides,
      homepage,
    },
  }
}

export default App
