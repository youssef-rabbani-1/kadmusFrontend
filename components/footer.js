import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.defaultDark,
        padding: "0 4em",
        "@media (max-width: 600px)": {
            padding: "0 12px",
        },
        height: "400px",
    },
    container: {
        padding: "44px 32px"
    },
    title: {
        marginBottom: "1.35rem"
    },
    socialIcon: {
        color: "#6a6767",
        fontSize: "2.0rem"
    },
    linkText: {
        color: "#6a6767",
    },
    description: {
        lineHeight: "25px"
    }
}))
export default function App() {
    const { root, container, title, description, linkText, socialIcon } = useStyles();
    return (
        <Grid container className={root}>
            <Grid item xs={6} md={4} className={container}>
                <Typography variant="h5" color="primary" className={title}>
                    Logo
                </Typography>
                <Typography variant="body2" color="primary" className={description}>
                    Information about kadmus to be placed here.
                    <br />
                    ie. about us, our vision, inspiration, what we provide.
                    <br />
                    in a short text
                </Typography>
            </Grid>
            <Grid item xs={6} md={4} className={container}>
                <Typography variant="h5" color="primary" className={title}>
                    Our Services
                </Typography>
                <Typography variant="subtitle1" className={linkText}>
                    Home
                </Typography>
                <Typography variant="subtitle1" className={linkText}>
                    News
                </Typography>
                <Typography variant="subtitle1" className={linkText}>
                    Guides
                </Typography>
                <Typography variant="subtitle1" className={linkText}>
                    About Us
                </Typography>
            </Grid>
            <Grid item xs={6} md={4} className={container}>
                <Typography variant="h5" color="primary" className={title}>
                    Get in Touch
                </Typography>

                <Grid container spacing={1}>
                    <Grid item>
                        <LinkedInIcon fontSize="large" className={socialIcon} />
                    </Grid>
                    <Grid item>
                        <FacebookIcon fontSize="large" className={socialIcon} />
                    </Grid>
                    <Grid item>
                        <YouTubeIcon fontSize="large" className={socialIcon} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}