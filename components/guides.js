import React from "react"
import { makeStyles, Paper, Typography, Grid } from "@material-ui/core"
import Card from "./GuideCard"
import Carousel, { CarouselItem } from "./carousel/Carousel"

const useStyles = makeStyles((theme) => ({
  card: {
    transition: "0.3s",
    //boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  title: {
    margin: "24px 0",
  },
  content: {
    marginBottom: "12px",
  },
}))
function GroupedGuides({ key, guides }) {
  const { card } = useStyles()

  return guides.map((item) => {
    return (
      <CarouselItem key={`${item.id}`}>
        <Grid item>
          <Paper className={card} elevation={0}>
            <Card guide={item} />
          </Paper>
        </Grid>
      </CarouselItem>
    )
  })
}
const App = ({ groupedGuides }) => {
  const { title, content } = useStyles()

  const keys = Object.keys(groupedGuides)
  return keys.map((key, index) => {
    return (
      <Grid key={index} container>
        <Grid item xs={12} className={title}>
          <Typography key={index} variant="h5">
            {key}
          </Typography>
        </Grid>
        <Carousel className={content}>
          <GroupedGuides element guides={groupedGuides[key]} />
        </Carousel>
      </Grid>
    )
  })
}
export default App
