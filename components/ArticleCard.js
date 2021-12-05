import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Link from "next/link"
import NextImage from "./image"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    height: "250px",
  },
  container: {
    height: "100%",
  },
  content: {
    height: "75%",
  },
  actions: {
    //height: "25%",
    display: "flex",
    justifyContent: "flex-end",
  },
  title: {
    marginBottom: "12px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}))

export default function App({ article }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Grid container className={classes.container}>
        <Grid container item xs={6} direction="row" alignItems="center">
          <Grid item xs={12}>
            <CardMedia title="img">
              <NextImage image={article.image} />
            </CardMedia>
          </Grid>
        </Grid>
        <Grid container item xs={6}>
          <Grid container item xs={12} className={classes.content}>
            <CardContent>
              <Typography
                variant="h5"
                color="textPrimary"
                className={classes.title}
              >
                {article.title}
              </Typography>
              {/*<Typography variant="body1" color={"textPrimary"}>
                article.description
              </Typography>*/}
            </CardContent>
          </Grid>
          <Grid container item xs={12} className={classes.actions}>
            <CardActions disableSpacing>
              <Link as={`/blog/${article.id}`} href="/blog/[id]" passHref>
                <Button variant="outlined" color="primary">
                  Read More
                </Button>
              </Link>
            </CardActions>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  )
}
