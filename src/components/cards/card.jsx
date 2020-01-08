import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles(theme => ({
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

function FilterCard({ title, img, subtitle, ...props }) {
  const classes = useStyles();
  return (
    <GridListTile {...props}>
      <img src={img} alt={title} />
      <GridListTileBar
        title={title}
        subtitle={<span>{subtitle}</span>}
        actionIcon={
          <IconButton
            aria-label={`info about ${title}`}
            className={classes.icon}
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </GridListTile>
  );
}

export default FilterCard;
