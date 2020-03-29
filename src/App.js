import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { SdrControl, StationInfo } from "./components";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            Ground Station Control
          </Typography>
          <StationInfo source="http://localhost:1881/api/sys/qth" />
        </Toolbar>
      </AppBar>
      <SdrControl source="http://localhost:1882/api/sdrs/main" />
    </div>
  );
}

export default App;
