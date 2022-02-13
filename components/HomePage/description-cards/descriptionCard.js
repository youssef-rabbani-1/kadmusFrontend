import React from "react"
import Link from "next/link"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
    maxWidth: 225,
    minHeight: 265,
    marginRight: "48px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: theme.palette.primary.main,
  },
}))
function App(props) {
  const { root, text, section } = useStyles()
  return (
    <Link href={props.link} passHref>
      <Card
        className={root}
        elevation={0}
        style={{ backgroundColor: props.bkgd }}
      >
        <CardContent className={section}>
          <Typography variant="h5" component="p" className={text}>
            {props.description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}
export default App
