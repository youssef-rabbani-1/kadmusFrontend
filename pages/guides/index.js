import React from "react"
import { Grid } from "@material-ui/core"
import Guides from "../../components/guides"
import { makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Seo from "../../components/seo"
import { fetchAPI } from "../../lib/api"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "12px",
    padding: "0 4em",
    "@media (max-width: 600px)": {
      padding: "0 12px",
    },
  },
  body: {
    minHeight: "90vh",
  },
}))

const App = ({ guides, homepage }) => {
  const mobile = useMediaQuery("(max-width:600px)")

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

  const { root, body } = useStyles()
  return (
    <div className={root}>
      {/*<Seo seo={homepage.seo} />*/}
      {/*<Grid container spacing={mobile ? 2 : 6} className={body}>
        
      </Grid>*/}
      <div className={body}>
        <Guides groupedGuides={groupedGuides} />
      </div>
    </div>
  )
}

export async function getServerSideProps({ locale }) {
  // Run API calls in parallel
  const [guides, homepage] = await Promise.all([
    fetchAPI("/guides"),
    fetchAPI("/homepage"),
  ])

  return {
    props: {
      ...(await serverSideTranslations(locale, ["homepage", "footer"])),
      guides,
      homepage,
    },
  }
}

export default App
