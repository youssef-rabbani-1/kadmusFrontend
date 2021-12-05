import MUINav from "./MUINav"
import Footer from "../components/footer"

const Layout = ({ children, categories, seo, logo }) => (
  <>
    <MUINav logo={logo} />
    {children}
    <Footer logo={logo} />
  </>
)

export default Layout
