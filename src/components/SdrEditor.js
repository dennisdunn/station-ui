import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, makeStyles, Switch, TextField } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles(theme => ({
  root: { maxWidth: "40ch" },
  cardControls: { display: "flex", justifyItems: "end" },
  themed: {
    margin: theme.spacing(1)
  }
}));

export const SdrEditor = ({ sdr, onChange,children }) => {
  const classes = useStyles();
  const [state, setState] = useState(sdr);

  const updateState = (key, value) => {
    const newState = { ...state, [key]: value };
    setState(newState);
    if (onChange) onChange(newState);
  };

  const setMode = e => {
    const modes = state.modes;
    if (e.target.checked) {
      modes.add(e.target.value);
    } else {
      modes.delete(e.target.value);
    }
    updateState('modes', modes);
  };

  return (
    <div className={classes.root}>
      <TextField
        className={classes.themed}
        label="Key"
        value={state.key}
        onChange={e => updateState("key", e.target.value)}
      ></TextField>
      <TextField
        className={classes.themed}
        label="Label"
        value={state.label}
        onChange={e => updateState("label", e.target.value)}
      ></TextField>
      <TextField
        className={classes.themed}
        label="Control URL"
        value={state.controlUrl}
        onChange={e => updateState("controlUrl", e.target.value)}
      ></TextField>
      <TextField
        className={classes.themed}
        label="Audio URL"
        value={state.audioUrl}
        onChange={e => updateState("audioUrl", e.target.value)}
      ></TextField>
      <TextField
        className={classes.themed}
        label="Band Start"
        value={state.minFreq}
        type="number"
        onChange={e => updateState("minFreq", e.target.value)}
      ></TextField>
      <TextField
        className={classes.themed}
        label="Band End"
        value={state.maxFreq}
        type="number"
        onChange={e => updateState("maxFreq", e.target.value)}
      ></TextField>
      <FormControl className={classes.themed}>
        <FormLabel>Modes</FormLabel>
        <FormGroup row>
          <FormControlLabel
            label="FM"
            control={
              <Checkbox
                value="fm"
                checked={state.modes.has("fm")}
                onChange={setMode}
              ></Checkbox>
            }
          />
          <FormControlLabel
            label="AM"
            control={
              <Checkbox
                value="am"
                checked={state.modes.has("am")}
                onChange={setMode}
              ></Checkbox>
            }
          />
          <FormControlLabel
            label="LSB"
            control={
              <Checkbox
                value="lsb"
                checked={state.modes.has("lsb")}
                onChange={setMode}
              ></Checkbox>
            }
          />
          <FormControlLabel
            label="USB"
            control={
              <Checkbox
                value="usb"
                checked={state.modes.has("usb")}
                onChange={setMode}
              ></Checkbox>
            }
          />
        </FormGroup>
        <FormLabel>Interface</FormLabel>
        <FormGroup>
          <FormControlLabel
            label="Show Squelch?"
            control={
              <Switch
                checked={state.useSquelch}
                onChange={e => updateState("useSquelch", e.target.checked)}
              />
            }
          />
          <FormControlLabel
            label="Show Gain?"
            control={
              <Switch
                checked={state.useGain}
                onChange={e => updateState("useGain", e.target.checked)}
              />
            }
          />
          <FormControlLabel
            label="Show AGC?"
            control={
              <Switch
                checked={state.useAgc}
                onChange={e => updateState("useAgc", e.target.checked)}
              />
            }
          />
        </FormGroup>
      </FormControl>
      {children}
    </div>
  );
};
