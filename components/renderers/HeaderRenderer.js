import React from "react"
import Typography from "@material-ui/core/Typography"

export default function App({ children, level }) {
  return (
    <Typography variant={`h${level}`} color="textPrimary" gutterBottom>
      {children}
    </Typography>
  )
}
