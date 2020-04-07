import {
  AppBar,
  Drawer,
  Grid,
  Icon,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  callApi,
  NavList,
  NavListItem,
  SatelliteEvents,
  SatelliteStatus,
  StationClock,
  StationInfo,
  Tuner,
  TunerEditor,
  tuners,
} from "./components";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: { margin: theme.spacing(1) },
}));

function App() {
  const classes = useStyles();
  const [satellite, setSatellite] = useState();
  const [satellites, setSatellites] = useState([]);
  const [tuner, setTuner] = useState(tuners[0]);
  const [showNavDrawer, setShowNavDrawer] = useState(false);
  const [showTunerEditor, setShowTunerEditor] = useState(false);

  const sdrTune = (data) => {
    callApi({ url: tuner.controlUrl, method: "POST", data });
  };

  useEffect(() => {
    callApi({ url: tuner.predictUrl }, setSatellites);
  }, [tuner.predictUrl]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setShowNavDrawer(true)}
          >
            <Icon>menu</Icon>
          </IconButton>
          <div className={classes.title}>
            <Typography variant="h6">Ground Station Control</Typography>
            <StationClock />
            <StationInfo station="http://localhost:1881/api/sys/qth" />
          </div>
        </Toolbar>
      </AppBar>
      <Grid className={classes.content} container spacing={2}>
        <Grid item>
          <Tuner definition={tuner} onTune={sdrTune} onChange={setTuner} />
        </Grid>
        <Grid item>
          <SatelliteStatus name={satellite} src={tuner.predictUrl} />
        </Grid>
        <Grid item>
          <SatelliteEvents
            src={tuner.predictUrl}
            data={satellites}
            onSelected={setSatellite}
          />
        </Grid>
      </Grid>
      <Drawer open={showNavDrawer} onClose={() => setShowNavDrawer(false)}>
        <div className={classes.content}>
          <NavList
            title="Tuner Definitions"
            onNew={() => {
              setShowNavDrawer(false);
              setShowTunerEditor(true);
            }}
          >
            {tuners.map((v, i) => (
              <NavListItem
                key={i}
                value={v}
                onClick={(v) => {
                  setShowNavDrawer(false);
                  setTuner(v);
                }}
              />
            ))}
          </NavList>
        </div>
      </Drawer>
      <TunerEditor
        isOpen={showTunerEditor}
        onSave={setTuner}
        onClose={setShowTunerEditor}
      />
    </div>
  );
}

export default App;
