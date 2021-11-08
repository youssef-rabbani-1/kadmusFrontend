import React from "react"
import DescriptionCard from "../components/descriptionCard"
import { Grid } from "@material-ui/core"
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
  return (
    <Grid
      container
      spacing={10}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {items.map((item) => {
        return (
          <Grid item key={item.title}>
            <DescriptionCard data={item} />
          </Grid>
        )
      })}
    </Grid>
  )
}
