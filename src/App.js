import {
  AppBar,
  Button,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import {
  Sdr,
  sdrConfig,
  SdrEditor,
  sdrSettings,
  StationInfo,
  callApi,
} from "./components";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  content: { margin: theme.spacing(1) },
}));

function App() {
  const classes = useStyles();
  const [sdr, setSdr] = useState(sdrConfig);
  const [settings, setSettings] = useState(sdrSettings);
  const [isOpen, setIsOpen] = useState(false);

  const sdrTune = (data) => {
    callApi({ url: sdr.controlUrl, method: "POST", data });
  };

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
          <Sdr config={sdr} settings={settings} onChange={sdrTune}>
            <Button onClick={() => setIsOpen(true)}>Edit</Button>
          </Sdr>
        </Grid>
      </Grid>
      <SdrEditor
        isOpen={isOpen}
        data={sdr}
        onSave={setSdr}
        onClose={setIsOpen}
      />
    </div>
  );
}

export default App;
