import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.secondary,
    minWidth: 200,
    maxWidth: 225,
    minHeight: 297,
    marginRight: "48px",
  },
  text: {
    color: theme.palette.primary.main,
  },
}))

export default function App({ data }) {
  const { root, text } = useStyles()
  return (
    <Card className={root} elevation={0}>
      <CardContent>
        <Typography variant="h5" component="p" className={text}>
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  )
}
