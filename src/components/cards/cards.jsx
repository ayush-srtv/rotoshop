import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";

function FilterCards({
  title,
  skeleton = true,
  children,
  className,
  cellHeight = 180,
  cols = 2
}) {
  const gridListProps = {
    cellHeight,
    className
  };
  const gridListTile = {
    key: "Subheader",
    cols,
    style: { height: "auto" }
  };
  return (
    <GridList {...gridListProps}>
      {title && (
        <GridListTile {...gridListTile}>
          <ListSubheader component="div">{title}</ListSubheader>
        </GridListTile>
      )}
      {children}
    </GridList>
  );
}

export default FilterCards;
