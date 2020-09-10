import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import HomeIcon from "@material-ui/icons/Home";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
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
const tabs = (index = -1) =>
  [
    {
      component: Link,
      to: "/filters",
      icon: [<EditOutlinedIcon />, <EditIcon />]
    },
    {
      component: Link,
      to: "/",
      icon: [<HomeOutlinedIcon />, <HomeIcon />]
    },
    {
      component: Link,
      to: "/settings",
      icon: [<SettingsOutlinedIcon />, <SettingsIcon />]
    }
  ].map(({ icon, ...tab }, key) => ({
    ...tab,
    icon: icon[Number(key === index)],
    ...a11yProps(key)
  }));

function Navigation({ location: { pathname } }) {
  const classes = useStyles();
  const index = tabs().findIndex(({ to }) => to === pathname);
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
        {tabs(value).map((tab) => (
          <Tab {...tab} {...{ key: tab.to, index }} />
        ))}
      </Tabs>
    </Paper>
  );
}

export default withRouter(Navigation);
