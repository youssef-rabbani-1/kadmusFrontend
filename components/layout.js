import MUINav from "./MUINav"
import Grid from "@material-ui/core/Grid"

const Layout = ({ children, categories, seo }) => (
  <>
    <MUINav />
    {children}
  </>
)

export default Layout
