import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const useStyles = makeStyles(theme => ({}));

function FilterCard({ title }) {
  return (
    <GridListTile>
      <img src="" alt="card" />
      <GridListTileBar />
    </GridListTile>
  );
}
