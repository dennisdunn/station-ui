import {
  AppBar,
  Drawer,
  Grid,
  Icon,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  List,
  ListItem,
  Divider,
} from "@material-ui/core";
import React, { useState } from "react";
import {
  callApi,
  presets,
  StationInfo,
  Tuner,
  tunerDefs,
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
  const [def, setTunerDef] = useState(tunerDefs[0]);
  const [showTunerDef, setShowTunerDef] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const sdrTune = (data) => {
    callApi({ url: def.controlUrl, method: "POST", data });
  };

  const mkDefinitionsList = (defs) => {
    return defs.map((def, i) => (
      <ListItem
        key={i}
        button
        onClick={(e) => {
          setTunerDef(def);
          setShowDrawer(false);
        }}
      >
        {def.label}
      </ListItem>
    ));
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
          <Tuner config={def} presets={presets} onChange={sdrTune} />
        </Grid>
      </Grid>
      <TunerDefEditor
        isOpen={showTunerDef}
        onSave={setTunerDef}
        onClose={setShowTunerDef}
      />
      <Drawer open={showDrawer} onClose={() => setShowDrawer(false)}>
        <div className={classes.content}>
          <Typography>Tuner Definitions</Typography>
          <Divider />
          <List>
            <ListItem
              button
              onClick={() => {
                setShowDrawer(false);
                setShowTunerDef(true);
              }}
            >
              <Typography variant="caption">
                <em>New Tuner Definition...</em>
              </Typography>
            </ListItem>
            {mkDefinitionsList(tunerDefs)}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default App;
