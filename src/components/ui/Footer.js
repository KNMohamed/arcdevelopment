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
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
}));
export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              onClick={() => props.setValue(0)}
              to="/"
              className={classes.link}
            >
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              onClick={() => props.setValue(1)}
              to="/services"
              className={classes.link}
            >
              Services
            </Grid>
            <Grid
              item
              component={Link}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(0);
              }}
              to="/customsoftware"
              className={classes.link}
            >
              Custom Software Development
            </Grid>
            <Grid
              item
              component={Link}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
              to="/mobileapps"
              className={classes.link}
            >
              Mobile App Development
            </Grid>
            <Grid
              item
              component={Link}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
              to="/websites"
              className={classes.link}
            >
              Website Development
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              onClick={() => props.setValue(2)}
              to="/revolution"
              className={classes.link}
            >
              The Revolution
            </Grid>
            <Grid
              item
              component={Link}
              onClick={() => props.setValue(2)}
              to="/revolution"
              className={classes.link}
            >
              Vision
            </Grid>
            <Grid
              item
              component={Link}
              onClick={() => props.setValue(2)}
              to="/revolution"
              className={classes.link}
            >
              Technology
            </Grid>
            <Grid
              item
              component={Link}
              onClick={() => props.setValue(2)}
              to="/revolution"
              className={classes.link}
            >
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              onClick={() => props.setValue(3)}
              to="/about"
              className={classes.link}
            >
              About us
            </Grid>
            <Grid
              item
              component={Link}
              onClick={() => props.setValue(3)}
              to="/about"
              className={classes.link}
            >
              History
            </Grid>
            <Grid
              item
              component={Link}
              onClick={() => props.setValue(3)}
              to="/about"
              className={classes.link}
            >
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              onClick={() => props.setValue(4)}
              to="/contact"
              className={classes.link}
            >
              Contact Us
            </Grid>
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
