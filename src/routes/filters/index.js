import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    padding: "10px 30px",
    height: "calc(100% - 132px)"
  }
}));

function Filter() {
  const classes = useStyles();
  return <div className={classes.container}>Filter</div>;
}

export default Filter;
