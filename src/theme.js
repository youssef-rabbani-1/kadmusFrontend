import { createTheme } from "@material-ui/core/styles"

const theme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#0f0b1c",
      defaultDark:"#252222",
      secondary:"#30284b"
    },
    primary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#686469",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff4081",
      main: "#923ba2",
      dark: "#c51162",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(66, 66, 66, 1)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
})

export default theme
