import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import debounce from "lodash/debounce";
import storage from "../../utils/storage/";
import { SETTINGS } from "../../config/constants";

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
const DELAY = 1000;
const setConfig = debounce(
  async (key, value) => await storage.set(key, value),
  DELAY
);

function Settings() {
  const classes = useStyles();
  const [saturation, setSaturation] = useState(0);
  const [brightness, setBrightness] = useState(0);
  const [contrast, setContrast] = useState(0);

  useEffect(() => {
    async function setupDefaults() {
      const _saturation = (await storage.get(SETTINGS.SATURATION)) || 0;
      const _brightness = (await storage.get(SETTINGS.BRIGHTNESS)) || 0;
      const _contrast = (await storage.get(SETTINGS.CONTRAST)) || 0;
      setSaturation(_saturation);
      setBrightness(_brightness);
      setContrast(_contrast);
    }
    setupDefaults();
    return () => {};
  }, []);

  const handleSaturationChange = (event, newValue) => {
    setSaturation(newValue);
    setConfig("saturation", newValue);
  };
  const handleBrightnessChange = (event, newValue) => {
    setBrightness(newValue);
    setConfig("brightness", newValue);
  };
  const handleContrastChange = (event, newValue) => {
    setContrast(newValue);
    setConfig("contrast", newValue);
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
              value={brightness}
              onChange={handleBrightnessChange}
              aria-labelledby="continuous-slider"
              min={0}
              max={100}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.margin}>
            <Typography id="discrete-slider-custom" gutterBottom>
              Contrast
            </Typography>
            <PrettoSlider
              value={contrast}
              onChange={handleContrastChange}
              aria-labelledby="continuous-slider"
              min={0}
              max={100}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.margin}>
            <Typography id="discrete-slider-custom" gutterBottom>
              Saturation
            </Typography>
            <PrettoSlider
              value={saturation}
              onChange={handleSaturationChange}
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
