import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    width: 200,
    height: "calc(100% - 132px)"
  }
});

function Settings() {
  const classes = useStyles();
  const [state, setState] = useState(0);

  const handleChange = (event, newValue) => {
    setState(newValue);
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs>
          <Slider
            value={state}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Settings;
