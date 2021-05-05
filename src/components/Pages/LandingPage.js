import React from "react";
import Lottie from "react-lottie";
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  useMediaQuery,
  Card,
  CardContent,
} from "@material-ui/core";
import ButtonArrow from "../ui/ButtonArrow";
import animationData from "../../animations/landinganimation/data";
import { useTheme } from "@material-ui/styles";

import mobileAppsIcon from "../../assets/mobileIcon.svg";
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import websitesIcon from "../../assets/websiteIcon.svg";
import revolutionBackground from "../../assets/repeatingBackground.svg";
import infoBackground from "../../assets/infoBackground.svg";
import CallToAction from "../ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimate: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0",
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRation: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        {/*-----Hero Block-----*/}
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Grid item sm className={classes.heroTextContainer}>
            <Typography variant="h2" color="initial" align="center">
              Bringing West Coast Technology <br /> to the Midwest
            </Typography>
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.estimate}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.learnButtonHero}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Services Block-----*/}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? "0" : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4" color="primary">
              Custom Software Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save enery, Save time, Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to
              <span className={classes.specialText}>celebration</span>.
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              className={classes.learnButton}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              src={customSoftwareIcon}
              alt="custom software icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----IOS/Android Block-----*/}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : "flex-end"}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4" color="primary">
              IOS/Android Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend functionality. Extend access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />}with either mobile platform.
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              className={classes.learnButton}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? "0" : "5em" }}>
            <img
              src={mobileAppsIcon}
              alt="mobile phone icons"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Website Block-----*/}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? "0" : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4" color="primary">
              Website Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach more. Discover more. Sell more.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              className={classes.learnButton}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              src={websitesIcon}
              alt="website icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----The Revolution Block-----*/}
        <Grid
          container
          style={{ height: "100em", marginTop: "12em" }}
          alignItems="center"
          justify="center"
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom color="primary">
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with revolutionary techonology,
                    is a recipe for revolution
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={classes.learnButtonHero}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      <Grid item>
        {/*-----The information block-----*/}
        <Grid
          container
          style={{ height: "80em" }}
          direction="row"
          alignItems="center"
        >
          <Grid
            item
            container
            style={{
              position: "absolute",
              textAlign: matchesXS ? "center" : "inherit",
            }}
            direction={matchesXS ? "column" : "row"}
            spacing={matchesXS ? 10 : 0}
          >
            <Grid
              item
              sm
              style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2">Let's get personal.</Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButton}
                    style={{ color: "white", borderColor: "white" }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                textAlign: matchesXS ? "center" : "right",
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">
                  Say Hello!
                  <span role="img" aria-label="waving hand">
                    🖐
                  </span>
                </Typography>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButton}
                    style={{ color: "white", borderColor: "white" }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={10} height={10} fill="white" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div className={classes.infoBackground} />
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Call to action block-----*/}
        <CallToAction />
      </Grid>
    </Grid>
  );
}
