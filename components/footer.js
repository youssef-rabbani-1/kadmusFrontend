import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core"
import RedditIcon from "@material-ui/icons/Reddit"
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"
import IconButton from "@material-ui/core/IconButton"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Link from "next/link"
import { useTranslation } from "next-i18next"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.defaultDark,
    padding: "2em 4em",
    "@media (max-width: 600px)": {
      padding: "24px 12px",
    },
    minHeight: "400px",
  },
  container: {
    padding: "44px 0",
  },
  title: {
    marginBottom: "1.35rem",
  },
  socialIcon: {
    color: "#6a6767",
    fontSize: "2.0rem",
  },
  linkText: {
    color: "#6a6767",
  },
  description: {
    lineHeight: "25px",
  },
  content: {
    marginBottom: "12px",
  },
  section: {
    maxWidth: "275px",
  },
  iconButton: {
    padding: "0 !important",
  },
}))
export default function App() {
  const {
    root,
    container,
    title,
    description,
    linkText,
    socialIcon,
    content,
    iconButton,
    section,
  } = useStyles()
  const mobile = useMediaQuery("(max-width:600px)")
  const { t } = useTranslation("footer")

  return (
    <Grid container className={root}>
      <Grid item xs={12} md={4} className={content}>
        <div className={section}>
          <Typography variant="h5" color="primary" className={title}>
            Logo
          </Typography>
          <Typography variant="body2" color="primary" className={description}>
            {t("description")}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} md={4} className={content}>
        <Typography variant="h5" color="primary" className={title}>
          {t("title2")}
        </Typography>
        <Link href="/" passHref>
          <Typography variant="subtitle1" className={linkText}>
            Home
          </Typography>
        </Link>
        <Link href="/blog" passHref>
          <Typography variant="subtitle1" className={linkText}>
            News
          </Typography>
        </Link>
        <Link href="/guides" passHref>
          <Typography variant="subtitle1" className={linkText}>
            Guides
          </Typography>
        </Link>
        <Link href="/" passHref>
          <Typography variant="subtitle1" className={linkText}>
            About Us
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="h5" color="primary" className={title}>
          {t("title3")}
        </Typography>
        <Grid container spacing={1} className={content}>
          <Grid item>
            <a
              href="https://www.instagram.com/cryptocad/"
              passhref="true"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton aria-label="Instagram" className={iconButton}>
                <InstagramIcon fontSize="large" className={socialIcon} />
              </IconButton>
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://www.reddit.com/user/cryptocadchats"
              passhref="true"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton aria-label="Reddit" className={iconButton}>
                <RedditIcon fontSize="large" className={socialIcon} />
              </IconButton>
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://twitter.com/cryptocadtweets"
              passhref="true"
              target="_blank"
              rel="noreferrer"
            >
              <IconButton aria-label="Twitter" className={iconButton}>
                <TwitterIcon fontSize="large" className={socialIcon} />
              </IconButton>
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
