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
    title: "Breakfast",
    subtitle: "Ayush Srivastava"
  },
  {
    img: sampleImage,
    title: "Tasty burger",
    subtitle: "Avi Nigam"
  },
  {
    img: sampleImage,
    title: "Camera",
    subtitle: "Ashish Bhaduria"
  },
  {
    img: sampleImage,
    title: "Morning",
    subtitle: "Nilesh Kumrawat"
  },
  {
    img: sampleImage,
    title: "Hats",
    subtitle: "Utkarsh Yeolkar"
  },
  {
    img: sampleImage,
    title: "Honey",
    subtitle: "Omkar Khenewar"
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
