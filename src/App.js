import { AppBar, Button, Dialog, DialogActions, DialogContent, Grid, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Sdr, sdrConfig, SdrEditor, sdrSettings, StationInfo } from "./components";

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
  const [sdr, setSdr] = useState(sdrConfig);
  const [isOpen, setIsOpen] = useState(false);

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
          <Sdr config={sdr} settings={sdrSettings} onChange={console.log}>
            <Button onClick={() => setIsOpen(true)}>Edit</Button>
          </Sdr>
        </Grid>
      </Grid>
      <Dialog open={isOpen}>
        <DialogContent>
          <SdrEditor sdr={sdr} onChange={setSdr} />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setIsOpen(false);
              setSdr(sdrConfig);
            }}
            color="secondary"
          >
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
