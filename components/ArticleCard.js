import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import CardActionArea from "@material-ui/core/CardActionArea"
import Link from "next/link"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    minHeight: "250px",
    "@media (min-width: 960px)": {
      //maxHeight: 250,
    },
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
    //paddingTop: "42%", // 16:9
  },
}))

export default function App({ article }) {
  const classes = useStyles()
  const mobile = useMediaQuery("(max-width:960px)")

  return (
    <Link as={`/blog/${article.id}`} href="/blog/[id]" passHref>
      {/* {   <Grid container className={classes.container}>
        <Grid container item xs={12} md={6} direction="row" alignItems="center">
          <CardMedia title="img">
            <NextImage image={article.image} />
          </CardMedia>
        </Grid>
        <Grid container item xs={12} md={6} className={classes.content}>
          <CardContent>
            <Typography
              variant={mobile ? "h6" : "h5"}
              color="textPrimary"
              className={classes.title}
            >
              {article.title}
            </Typography>
            {/*<Typography variant="body1" color={"textPrimary"}>
                article.description
              </Typography>}
          </CardContent>
        </Grid>
      </Grid>} */}
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="img"
            height="240"
            image={article.image.url}
            title="img"
          />
          <CardContent>
            <Typography gutterBottom variant={mobile ? "h6" : "h5"}>
              {article.title}
            </Typography>
            {/* {<Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>} */}
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}
