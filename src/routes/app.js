import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Navigation from "../components/navigation";
import Typography from "@material-ui/core/Typography";

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

  const titleProps = {
    variant: "h6",
    color: "inherit"
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography {...titleProps}>Rotoshop</Typography>
        </Toolbar>
      </AppBar>
      {children}
      <Navigation />
    </div>
  );
}

export default App;
