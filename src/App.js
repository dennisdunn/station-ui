import {
  AppBar,
  Dialog,
  DialogContent,
  DialogActions,
  Grid,
  makeStyles,
  Toolbar,
  Typography
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
  },
  content: { margin: theme.spacing(1) }
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
      <Grid className={classes.content} container spacing={2}>
        <Grid item>
          <SdrControl
            config={config}
            settings={sdrSettings}
            onChange={console.log}
          />
        </Grid>
      </Grid>
      <Dialog>
        <DialogContent>
          <SdrControlEditor config={config} onChange={} />
        </DialogContent>
        <DialogActions>

        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
