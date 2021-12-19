import React from "react"
import Articles from "../components/articles"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Banner from "../components/HomePage/banner"
import Cards from "../components/HomePage/description-cards"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

const Home = ({ articles, categories, homepage, blog }) => {
  return (
    <React.Fragment>
      <Banner />
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
