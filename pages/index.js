import React from "react"
import Articles from "../components/articles"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import ComingSoon from "../components/coming-soon"
import Banner from "../components/banner"
import Cards from "../components/cards"

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

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage, blog] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
    fetchAPI("/blog"),
  ])

  return {
    props: { articles, categories, homepage, blog },
    revalidate: 1,
  }
}

export default Home
