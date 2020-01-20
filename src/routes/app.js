import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Navigation from "../components/navigation";
import { sampleImage } from "../config/default.config.json";
import storage from "../utils/storage";
import { ImageContext } from "../utils/context/image.context";

const useStyles = makeStyles(theme => {
  console.dir(theme);
  return {
    root: {
      flexGrow: 1,
      height: "100%",
      width: "100%"
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  };
});

function App({ children }) {
  const classes = useStyles();
  const [image, setImage] = useState();
  const titleProps = {
    variant: "h6",
    color: "inherit"
  };

  useEffect(() => {
    async function setupDefaults() {
      const img = (await storage.get("image")) || sampleImage;
      setImage(img);
    }
    setupDefaults();
    return () => {};
  }, []);

  return (
    <ImageContext.Provider value={{ image, setImage }}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography {...titleProps}>Rotoshop</Typography>
          </Toolbar>
        </AppBar>
        {children}
        <Navigation />
      </div>
    </ImageContext.Provider>
  );
}

export default App;
