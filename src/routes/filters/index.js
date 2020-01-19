import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ImageContext } from "../../utils/context/image.context";
import { Card, Cards } from "../../components/cards";
const useStyles = makeStyles(theme => ({
  root: {
    padding: "10px 30px",
    height: "calc(100% - 132px)",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "100%",
    height: "100%"
  }
}));

const filters = [
  {
    title: "1977",
    figClass: "_1977"
  },
  {
    title: "Aden",
    figClass: "aden"
  },
  {
    title: "Brannan",
    figClass: "brannan"
  },
  {
    title: "Brooklyn",
    figClass: "brooklyn"
  },
  {
    title: "Clarendon",
    figClass: "clarendon"
  },
  {
    title: "Earlybird",
    figClass: "earlybird"
  },
  {
    title: "Gingham",
    figClass: "gingham"
  },
  {
    title: "Hudson",
    figClass: "hudson"
  },
  {
    title: "Inkwell",
    figClass: "inkwell"
  },
  {
    title: "Kelvin",
    figClass: "kelvin"
  },
  {
    title: "Lark",
    figClass: "lark"
  },
  {
    title: "Lo-Fi",
    figClass: "lofi"
  },
  {
    title: "Maven",
    figClass: "maven"
  },
  {
    title: "Mayfair",
    figClass: "mayfair"
  },
  {
    title: "Moon",
    figClass: "moon"
  },
  {
    title: "Nashville",
    figClass: "nashville"
  },
  {
    title: "Perpetua",
    figClass: "perpetua"
  },
  {
    title: "Nashville",
    figClass: "nashville"
  },
  {
    title: "Reyes",
    figClass: "reyes"
  },
  {
    title: "Rise",
    figClass: "rise"
  },
  {
    title: "Slumber",
    figClass: "slumber"
  },
  {
    title: "Stinson",
    figClass: "stinson"
  },
  {
    title: "Toaster",
    figClass: "toaster"
  },
  {
    title: "Valencia",
    figClass: "valencia"
  },
  {
    title: "Walden",
    figClass: "walden"
  },
  {
    title: "Willow",
    figClass: "willow"
  },
  {
    title: "X-pro II",
    figClass: "xpro2"
  }
];

function Filter() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ImageContext.Consumer>
        {image => (
          <Cards title="Filters" cellHeight={180} className={classes.gridList}>
            {filters.map(filter => (
              <Card key={filter.title} img={image} {...filter} />
            ))}
          </Cards>
        )}
      </ImageContext.Consumer>
    </div>
  );
}

export default Filter;
