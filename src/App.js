import { AppBar, Toolbar, Typography, Paper } from "@material-ui/core";
import React from "react";
import { StationInfo, FmControl } from "./components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  content: {
    margin: "1em"
  },
  title: {
    flexGrow: 1
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Remote Ground Station
          </Typography>
          <StationInfo callsign="KE8HMV" />
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        <Paper>
          <FmControl host="localhost" port={6020} />
        </Paper>
      </div>
    </div>
  );
}

export default App;
