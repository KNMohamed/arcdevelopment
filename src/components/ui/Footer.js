import React from "react";
import { makeStyles, Grid } from "@material-ui/core";
import footerAdornment from "../../assets/Footer Adornment.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "relative",
    width: "100%",
    backgroundColor: theme.palette.common.blue,
    zIndex: 1302,
  },
  adornment: {
    verticalAlign: "bottom",
    height: "25em",
    [theme.breakpoints.down("md")]: {
      height: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
    justifyContent: "center",
  },
  link: {
    color: theme.palette.common.white,
    fontFamily: "arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
  },
}));
export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container className={classes.mainContainer}>
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>
              Services
            </Grid>
            <Grid item className={classes.link}>
              Custom Software Development
            </Grid>
            <Grid item className={classes.link}>
              Mobile App Development\
            </Grid>
            <Grid item className={classes.link}>
              Website Development
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item className={classes.link}>
              The Revolution
            </Grid>
            <Grid item className={classes.link}>
              Vision
            </Grid>
            <Grid item className={classes.link}>
              Technology
            </Grid>
            <Grid item className={classes.link}>
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid className={classes.link}>About us</Grid>
            <Grid className={classes.link}>History</Grid>
            <Grid className={classes.link}>Team</Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid className={classes.link}>Contact Us</Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        src={footerAdornment}
        alt="footer adornment"
        className={classes.adornment}
      />
    </footer>
  );
}
