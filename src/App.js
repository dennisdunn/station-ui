import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { AudioControl, saveSdrSettings, SdrControl, StationInfo, SdrConfigEditor } from "./components";
import {baseUrl, streams} from './stream.conf';

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
      <SdrConfigEditor config={{}} />
      <AudioControl baseUrl={baseUrl} streams={streams} />
    </div>
  );
}

export default App;
