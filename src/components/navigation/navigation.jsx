import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import PhotoFilterIcon from "@material-ui/icons/PhotoFilterOutlined";
import EditIcon from "@material-ui/icons/EditOutlined";
import SettingsIcon from "@material-ui/icons/SettingsOutlined";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: "fixed",
    bottom: 0,
    width: "100%"
  }
});

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}
const tabs = [
  {
    component: Link,
    to: "/filters",
    icon: <PhotoFilterIcon />
  },
  {
    component: Link,
    to: "/",
    icon: <EditIcon />
  },
  {
    component: Link,
    to: "/settings",
    icon: <SettingsIcon />
  }
].map((tab, index) => ({ ...tab, ...a11yProps(index) }));

function Navigation({ location: { pathname } }) {
  const classes = useStyles();
  const index = tabs.findIndex(({ to }) => to === pathname);
  const [value, setValue] = useState(index);

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        {tabs.map((tab, index) => (
          <Tab {...tab} {...{ key: index, index }} />
        ))}
      </Tabs>
    </Paper>
  );
}

export default withRouter(Navigation);
