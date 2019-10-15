import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%"
  }
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <div classes={classes.center}>
      <CircularProgress className={classes.progress} />
    </div>
  );
}
