import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles(theme => ({
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

function FilterCard({ title, image, subtitle, figClass = "", ...props }) {
  const classes = useStyles();

  return (
    <GridListTile {...props}>
      <figure className={clsx(figClass, "filters")}>
        <img src={image} alt={title} />
      </figure>
      <GridListTileBar
        title={title}
        subtitle={<span>{subtitle}</span>}
        actionIcon={
          <Tooltip title={title}>
            <IconButton
              aria-label={`info about ${title}`}
              className={classes.icon}
            >
              <InfoIcon />
            </IconButton>
          </Tooltip>
        }
      />
    </GridListTile>
  );
}

export default FilterCard;
