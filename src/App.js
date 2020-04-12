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
  AzumithChart,
  callApi,
  CardWrapper,
  killStream,
  NavDrawer,
  SatelliteEvents,
  SatelliteStatus,
  StationClock,
  StationInfo,
  StreamPlayer,
  Tuner,
  TunerPresets,
  tuners,
} from "./components";
import { getUrl } from "./config";

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
  const [satTuner, setSatTuner] = useState(tuners[0]);
  const [showNavDrawer, setShowNavDrawer] = useState(false);
  const [passData, setPassData] = useState([]);
  const [presets, setPresets] = useState(tuners[0].presets);
  const [satTunerSettings, setSatTunerSettings] = useState({});
  const [fmTunerSettings, setFmTunerSettings] = useState({});
  const [streamName, setStreamName] = useState("receiver.ogg");

  const sdrTune = (data) => {
    callApi({ url: getUrl("sdr", "sdrs"), method: "POST", data });
  };

  const tuneToPreset = (data) => {
    setFmTunerSettings(data);
    sdrTune({ freq: data.freq + "M" });
    killStream(streamName);
  };

  useEffect(() => {
    fetch(getUrl("api", "satellites"))
      .then((resp) => resp.json())
      .then(setSatellites);
  }, []);

  useEffect(() => {
    if (satellite)
      fetch(getUrl("api", "satellites", satellite, "predict"))
        .then((resp) => resp.json())
        .then(setPassData);
  }, [satellite]);

  useEffect(() => {
    let satTuner = tuners.find((x) => x.label === satellite);
    if (!satTuner) {
      satTuner = tuners.find((x) => x.label === "default");
    }
    setSatTuner(() => ({ ...satTuner, label: satellite }));
    setSatTunerSettings((prev) => ({ ...prev, ...satTuner.current }));
  }, [satellite]);

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
            <StationInfo url={getUrl("api", "sys", "location")} />
          </div>
        </Toolbar>
      </AppBar>
      <Grid className={classes.content} container spacing={2}>
        <Grid item>
          <SatelliteEvents
            url={getUrl("api", "events?fields=name,nextEvent")}
            data={satellites}
            onSelected={setSatellite}
          />
        </Grid>
        <Grid item>
          <SatelliteStatus url={getUrl("api", "satellites", satellite)} />
        </Grid>
        <Grid item>
          <AzumithChart name={satellite} data={passData} />
        </Grid>
        <Grid item>
          <CardWrapper>
            <Tuner
              definition={satTuner}
              {...satTunerSettings}
              onChange={sdrTune}
            />
          </CardWrapper>
        </Grid>
        <Grid item>
          <CardWrapper>
            <StreamPlayer
              url={getUrl("stream", streamName)}
              variant="contained"
              color="primary"
            />
          </CardWrapper>
          <CardWrapper>
            <Tuner
              definition={tuners[0]}
              {...fmTunerSettings}
              onChange={sdrTune}
            />
            <TunerPresets presets={presets} onSelected={tuneToPreset} />
          </CardWrapper>
        </Grid>
      </Grid>
      <Drawer open={showNavDrawer} onClose={() => setShowNavDrawer(false)}>
        <NavDrawer />
      </Drawer>
    </div>
  );
}

export default App;
