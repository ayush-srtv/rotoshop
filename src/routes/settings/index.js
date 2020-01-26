import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "10px 30px",
    height: "calc(100% - 132px)",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  margin: {
    height: theme.spacing(3)
  }
}));

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

function Settings() {
  const classes = useStyles();
  const [state, setState] = useState(12);

  const handleChange = (event, newValue) => {
    setState(newValue);
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.margin}>
            <Typography id="discrete-slider-custom" gutterBottom>
              Brightness
            </Typography>
            <PrettoSlider
              value={state}
              onChange={handleChange}
              aria-labelledby="continuous-slider"
              min={0}
              max={100}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Settings;
