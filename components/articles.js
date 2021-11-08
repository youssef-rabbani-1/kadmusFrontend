import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Card from "./ArticleCard"

const useStyles = makeStyles((theme) => ({
  card: {
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
}))
const Articles = ({ articles }) => {
  const { card } = useStyles()

  return articles.map((article, i) => {
    return (
      <Grid item xs={12} md={6} key={`${article.slug}`}>
        <Paper className={card}>
          <Card article={article} />
        </Paper>
      </Grid>
    )
  })
}
export default Articles
