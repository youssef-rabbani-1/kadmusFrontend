import React from 'react'
import  {Typography, makeStyles}  from "@material-ui/core"

const useStyles = makeStyles((theme) => ({

  text: {
    margin: "24px 0",
  },
}))

export default function App({ children, level }) {
  const { text } = useStyles()

  return (
    <Typography className={text} variant="body1" color="textPrimary" paragraph>
      {children}
    </Typography>
  )
}
