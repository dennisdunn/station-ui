import {
  AppBar,
  Button,
  Divider,
  Drawer,
  Grid,
  Icon,
  IconButton,
  List,
  ListItem,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  AudioCard,
  AzumithChart,
  callApi,
  SatelliteEvents,
  SatelliteStatus,
  StationClock,
  StationInfo,
  StreamPlayer,
  Tuner,
  TunerEditor,
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
  const [tuner, setTuner] = useState(tuners[0]);
  const [showNavDrawer, setShowNavDrawer] = useState(false);
  const [showTunerEditor, setShowTunerEditor] = useState(false);
  const [passData, setPassData] = useState([]);

  const sdrTune = (data) => {
    callApi({ url: getUrl("sdr", "sdrs"), method: "POST", data });
  };

  useEffect(() => {
    callApi({ url: getUrl("predict", "satellites") }, setSatellites);
  }, []);

  useEffect(() => {
    if (satellite)
      callApi(
        { url: getUrl("predict", "satellites", satellite, "predict") },
        setPassData
      );
  }, [satellite]);

  useEffect(() => {
    let satTuner = tuners.find((x) => x.label === satellite);
    if (!satTuner) {
      satTuner = tuners.find((x) => x.label === "default");
    }
    setTuner(() => ({ ...satTuner, label: satellite }));
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
            <StationInfo url={getUrl("predict", "sys", "location")} />
          </div>
        </Toolbar>
      </AppBar>
      <Grid className={classes.content} container spacing={2}>
        <Grid item>
          <SatelliteEvents
            url={getUrl("predict", "events?fields=name,nextEvent")}
            data={satellites}
            onSelected={setSatellite}
          />
        </Grid>
        <Grid item>
          <SatelliteStatus url={getUrl("predict", "satellites", satellite)} />
        </Grid>
        <Grid item>
          <AzumithChart name={satellite} data={passData} />
        </Grid>
        <Grid item>
          <Tuner definition={tuner} onTune={sdrTune} onChange={setTuner} />
        </Grid>
        <Grid item>
          <AudioCard
            url={getUrl("audio", "receiver.ogg")}
            variant="contained"
            color="primary"
          />
        </Grid>
      </Grid>
      <Drawer open={showNavDrawer} onClose={() => setShowNavDrawer(false)}>
        <div className={classes.content}>
          <Typography>Tools</Typography>
          <Divider />
          <List>
            <ListItem>
              <Button href={getUrl("sdrAdmin")} target="_blank" size="small">
                SDR API
              </Button>
            </ListItem>
            <ListItem>
              <Button
                href={getUrl("predictAdmin")}
                target="_blank"
                size="small"
              >
                Predict API
              </Button>
            </ListItem>
            <ListItem>
              <Button href={getUrl("audioAdmin")} target="_blank" size="small">
                Audio streams
              </Button>
            </ListItem>
            <ListItem>
              <StreamPlayer url={getUrl("audio", "tone")} />
            </ListItem>
          </List>
          {/* <NavList
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
          </NavList> */}
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
