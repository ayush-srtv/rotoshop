import React from "react";
import Editor from "../../components/canvas-editor/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    height: "calc(100% - 112px)",
    width: "100%"
  }
}));

function Canvas() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Editor />
    </div>
  );
}

export default Canvas;
