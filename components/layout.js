import MUINav from "./MUINav"
import Grid from "@material-ui/core/Grid"
import Footer from "../components/footer"

const Layout = ({ children, categories, seo }) => (
  <>
    <MUINav />
    {children}
    <Footer/>
  </>
)

export default Layout
