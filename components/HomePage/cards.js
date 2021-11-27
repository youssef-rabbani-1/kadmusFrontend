import React from "react"
import DescriptionCard from "../descriptionCard"
import { Grid, makeStyles } from "@material-ui/core"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  card: {
    padding:"0 36px",
    marginBottom: "60px",
  },
}))
const items = [
  {
    title: "News",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Guides",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Consultations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]
export default function App() {
  const { root, card } = useStyles()
  const mobile = useMediaQuery("(max-width:600px)")

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={root}
    >
      {items.map((item) => {
        return (
          <Grid item key={item.title} className={card}>
            <DescriptionCard data={item} />
          </Grid>
        )
      })}
    </Grid>
  )
}
