import React from "react"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Banner from "../components/HomePage/banner"
import Cards from "../components/HomePage/description-cards"
import Intro from "../components/HomePage/intro"
import DescriptionBanner from "../components/HomePage/description-banner"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GlobalContext } from "./_app"
import { motion } from "framer-motion"
import NextImage from "../components/image"

const Home = ({ articles, categories, homepage, blog }) => {
  const { navTransparency } = React.useContext(GlobalContext)
  const [navTransparent, setNavTransparent] = navTransparency

  React.useEffect(() => {
    setNavTransparent(true)
  }, [])

  return (
    <div>
      <motion.div
        className="block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <Banner />
      </motion.div>
      <motion.div
        className="block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <Intro />
      </motion.div>
      <motion.div
        className="block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <Cards />
      </motion.div>
      <DescriptionBanner />
    </div>
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
