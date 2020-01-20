import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ImageContext } from "../../utils/context/image.context";
import { Card, Cards } from "../../components/cards";
import { filters } from "../../config/filters.config.json";
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

function Filter() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ImageContext.Consumer>
        {({ image }) => (
          <Cards
            title="Filters"
            cellHeight={"auto"}
            className={classes.gridList}
          >
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
