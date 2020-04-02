import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  Grid
} from "@material-ui/core";
import React, { useState } from "react";
import {
  sdrConfig,
  SdrControl,
  SdrControlEditor,
  sdrSettings,
  StationInfo
} from "./components";

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
  const [config, setConfig] = useState(sdrConfig);

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
      <Grid container spacing={2}>
        <SdrControlEditor config={config} onSave={data => setConfig(data)} />
        <SdrControl config={config} settings={sdrSettings} />
      </Grid>
    </div>
  );
}

export default App;
