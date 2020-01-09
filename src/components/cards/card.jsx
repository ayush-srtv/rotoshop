import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const useStyles = makeStyles(theme => ({
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

function FilterCard({ title, img, subtitle, ...props }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
    <GridListTile {...props}>
      <img src={img} alt={title} />
      <GridListTileBar
        title={title}
        subtitle={<span>{subtitle}</span>}
        actionIcon={
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <Tooltip
              PopperProps={{
                disablePortal: true
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title={title}
            >
              <IconButton
                aria-label={`info about ${title}`}
                onClick={handleTooltipOpen}
                className={classes.icon}
              >
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </ClickAwayListener>
        }
      />
    </GridListTile>
  );
}

export default FilterCard;
