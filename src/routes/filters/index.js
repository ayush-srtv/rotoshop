import React from "react";
import { Card, Cards } from "../../components/cards";
import { sampleImage } from "../../config/default.config.json";
import { makeStyles } from "@material-ui/core/styles";

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
    img: sampleImage,
    title: "1977",
    subtitle: "Ayush Srivastava",
    figClass: "_1977"
  },
  {
    img: sampleImage,
    title: "Aden",
    subtitle: "Avi Nigam",
    figClass: "aden"
  },
  {
    img: sampleImage,
    title: "Brannan",
    subtitle: "Ashish Bhaduria",
    figClass: "brannan"
  },
  {
    img: sampleImage,
    title: "Brooklyn",
    subtitle: "Nilesh Kumrawat",
    figClass: "brooklyn"
  },
  {
    img: sampleImage,
    title: "Hats",
    subtitle: "Utkarsh Yeolkar",
    figClass: ""
  },
  {
    img: sampleImage,
    title: "Clarendon",
    subtitle: "Omkar Khenewar",
    figClass: "clarendon"
  }
];

function Filter() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Cards title="Filters" cellHeight={180} className={classes.gridList}>
        {filters.map(filter => (
          <Card key={filter.title} {...filter} />
        ))}
      </Cards>
    </div>
  );
}

export default Filter;
