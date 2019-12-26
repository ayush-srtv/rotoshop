import React from "react";
import GridList from "@material-ui/core/GridList";

function FilterCards({ cards, skeleton = true, children }) {
  return <GridList>{children}</GridList>;
}

export default FilterCards;
