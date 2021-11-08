import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Card from "./GuideCard"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  card: {
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  title: {
    margin: "24px 0",
  },
  content:{
    marginBottom:"12px",
  },
}))
function App({ guides }) {
  const { card } = useStyles()

  return guides.map((item) => {
    return (
      <Grid item>
        <Paper className={card} key={`${item.id}`}>
          <Card guide={item} />
        </Paper>
      </Grid>
    )
  })
} export default App();
