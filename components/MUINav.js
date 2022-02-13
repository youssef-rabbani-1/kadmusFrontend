import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  MenuItem,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

import Link from "next/link"
import React from "react"
import { GlobalContext } from "../pages/_app"
import NextImage from "../components/image"

const useStyles = makeStyles((theme) => ({
  header: {
    position: "absolute",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
    color: "inherit",
  },
  logo: {
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    width: "190px",
    padding: "20px 0px",
  },
}))
const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "News",
    href: "/blog",
  },
  {
    label: "Guides",
    href: "/guides",
  },
  {
    label: "Prices",
    href: "/prices",
  },
]
const logo = {
  height: "800",
  width: "1199",
  url: "https://res.cloudinary.com/darina-zein-kadmus/image/upload/v1639921589/logo_e4cf9a2614.svg",
}
export default function Header() {
  const { header, toolbar, logo, menuButton, drawerContainer } = useStyles()
  const [state, setState] = React.useState({
    mobileView: false,
    drawerOpen: false,
  })

  const { mobileView, drawerOpen } = state

  const { navTransparency } = React.useContext(GlobalContext)
  const [navTransparent, setNavTransparent] = navTransparency

  React.useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }))
    }

    setResponsiveness()
    window.addEventListener("resize", () => setResponsiveness())

    return () => {
      window.removeEventListener("resize", () => setResponsiveness())
    }
  }, [])

  const displayDesktop = () => {
    return (
      <React.Fragment>
        <Toolbar className={toolbar}>
          {femmecubatorLogo}
          <div>{getMenuButtons()}</div>
        </Toolbar>
      </React.Fragment>
    )
  }
  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }))
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }))
    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: navTransparent ? "primary" : "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{ anchor: "left", open: drawerOpen, onClose: handleDrawerClose }}
        >
          <div className={drawerContainer}>
            <List>{getDrawerChoices()}</List>
          </div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    )
  }
  const getDrawerChoices = () => {
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }))
    return headersData.map(({ label, href }) => {
      return (
        <Link key={label} href={href} passHref>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary={label} />
          </ListItem>
        </Link>
      )
    })
  }

  const femmecubatorLogo =  <Typography variant="h3">Cadmus</Typography>
  
  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link key={label} href={href} passHref>
          <Button
            key={label}
            className={menuButton}
            style={{ color: navTransparent ? "white" : "black" }}
          >
            {label}
          </Button>
        </Link>
      )
    })
  }
  return (
    <React.Fragment>
      <AppBar
        className={header}
        elevation={0}
        style={
          navTransparent
            ? {
                background: "rgba( 255, 255, 255, 0.25 )",
                backdropFilter: "blur( 12.5px )",
                WebkitBackdropFilter: "blur( 12.5px )",
              }
            : {
                background: "rgba( 255, 255, 255, 1 )",
                backdropFilter: "blur( 12.5px )",
                WebkitBackdropFilter: "blur( 12.5px )",
              }
        }
      >
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </React.Fragment>
  )
}
