import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { sizing } from "@material-ui/system";
import { Avatar } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    maxHeight: "100%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    height: "100vh",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Navigation Side Bar"
        className={classes.tabs}
        centered={true}
      >
        <Avatar
          alt="Abas Farah"
          src="../../public/CoverPhoto.jpg"
          className={classes.large}
        />
        <Tab label="Home" {...a11yProps(0)} />
        <Tab label="About" {...a11yProps(1)} />
        <Tab label="Resume" {...a11yProps(2)} />
        <Tab label="Blog" {...a11yProps(3)} />
        <Tab label="Contact Me" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Home
      </TabPanel>
      <TabPanel value={value} index={1}>
        About
      </TabPanel>
      <TabPanel value={value} index={2}>
        Resume
      </TabPanel>
      <TabPanel value={value} index={3}>
        Blog
      </TabPanel>
      <TabPanel value={value} index={4}>
        Contact Me
      </TabPanel>
    </div>
  );
}