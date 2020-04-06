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
import React, { useState } from "react";
import {
  callApi,
  NavList,
  NavListItem,
  presets,
  StationInfo,
  Tuner,
  TunerDefEditor,
  tunerDefs,
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
  const [def, setTunerDef] = useState(tunerDefs[0]);
  const [preset, setPreset] = useState(presets[0]);
  const [showTunerDef, setShowTunerDef] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const sdrTune = (data) => {
    callApi({ url: def.controlUrl, method: "POST", data });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setShowDrawer(true)}
          >
            <Icon>menu</Icon>
          </IconButton>
          <Typography className={classes.title} variant="h6">
            Ground Station Control
          </Typography>
          <StationInfo source="http://localhost:1881/api/sys/qth" />
        </Toolbar>
      </AppBar>
      <Grid className={classes.content} container spacing={2}>
        <Grid item>
          <Tuner config={def} presets={preset} onChange={sdrTune} />
        </Grid>
      </Grid>
      <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
        <div className={classes.content}>
          <NavList
            title="Tuner Definitions"
            onNew={() => {
              setShowDrawer(false);
              setShowTunerDef(true);
            }}
          >
            {tunerDefs.map((v, i) => (
              <NavListItem
                key={i}
                value={v}
                onClick={(v) => {
                  setShowDrawer(false);
                  setTunerDef(v);
                  setPreset(presets.find((p) => p.label === v.preset));
                }}
              />
            ))}
          </NavList>
          <NavList title="Presets" onNew={() => setShowDrawer(false)}>
            {presets.map((v, i) => (
              <NavListItem
                key={i}
                value={v}
                onClick={(v) => {
                  setShowDrawer(false);
                  setPreset(v);
                }}
              />
            ))}
          </NavList>
        </div>
      </Drawer>
      <TunerDefEditor
        isOpen={showTunerDef}
        onSave={setTunerDef}
        onClose={setShowTunerDef}
      />
    </div>
  );
}

export default App;
