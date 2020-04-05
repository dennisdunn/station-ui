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
  callApi,
  tunerDef,
  presets,
  StationInfo,
  Tuner,
  TunerDefEditor,
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
  const [def, setTunerDef] = useState(tunerDef);
  const [isOpen, setIsOpen] = useState(false);

  const sdrTune = (data) => {
    callApi({ url: def.controlUrl, method: "POST", data });
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
          <Tuner config={def} presets={presets} onChange={sdrTune}>
            <Button onClick={() => setIsOpen(true)}>Edit</Button>
          </Tuner>
        </Grid>
      </Grid>
      <TunerDefEditor
        isOpen={isOpen}
        data={def}
        onSave={setTunerDef}
        onClose={setIsOpen}
      />
    </div>
  );
}

export default App;
