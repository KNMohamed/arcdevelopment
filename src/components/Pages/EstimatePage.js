import React from "react";
import {
  Grid,
  Typography,
  useMediaQuery,
  IconButton,
  Button,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import Lottie from "react-lottie";

import check from "../../assets/check.svg";
import send from "../../assets/send.svg";
import software from "../../assets/software.svg";
import mobile from "../../assets/mobile.svg";
import website from "../../assets/website.svg";
import backArrow from "../../assets/backArrow.svg";
import backArrowDisabled from "../../assets/backArrowDisabled.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import forwardArrowDisabled from "../../assets/forwardArrowDisabled.svg";
import camera from "../../assets/camera.svg";
import upload from "../../assets/upload.svg";
import person from "../../assets/person.svg";
import persons from "../../assets/persons.svg";
import people from "../../assets/people.svg";
import info from "../../assets/info.svg";
import bell from "../../assets/bell.svg";
import users from "../../assets/users.svg";
import iphone from "../../assets/iphone.svg";
import gps from "../../assets/gps.svg";
import customized from "../../assets/customized.svg";
import data from "../../assets/data.svg";
import android from "../../assets/android.svg";
import globe from "../../assets/globe.svg";
import biometrics from "../../assets/biometrics.svg";

import estimateAnimation from "../../animations/estimateAnimation/data.json";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "12em",
    height: "12em",
  },
}));

export default function EstimatePage() {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRation: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction={matchesMD ? "column" : "row"}>
      <Grid item container lg direction="column">
        <Grid
          item
          style={{ marginTop: "2em", marginLeft: matchesMD ? 0 : "5em" }}
        >
          <Typography variant="h2">Estimate</Typography>
        </Grid>
        <Grid item>
          <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
        </Grid>
      </Grid>
      <Grid item container lg direction="column">
        <Grid item>
          <Typography
            variant="h2"
            align="center"
            style={{ fontWeight: 300 }}
            gutterBottom
          >
            Which service are you interested in?
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item container direction="column" md>
            <Grid item style={{ maxWidth: "12em" }}>
              <Typography variant="h6" align="center">
                Custom Software Development
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={software}
                alt="three floating screens"
                className={classes.icon}
              />
            </Grid>
          </Grid>
          <Grid item container direction="column" md>
            <Grid item style={{ maxWidth: "12em" }}>
              <Typography variant="h6" align="center">
                iOS/Android App Development
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={mobile}
                alt="phones and tablet outline"
                className={classes.icon}
              />
            </Grid>
          </Grid>
          <Grid item container direction="column" md>
            <Grid item style={{ maxWidth: "12em" }}>
              <Typography variant="h6" align="center">
                Website Development
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={website}
                alt="computer outline"
                className={classes.icon}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
