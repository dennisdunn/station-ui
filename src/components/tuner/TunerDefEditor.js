import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  makeStyles,
  Switch,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: { maxWidth: "40ch" },
  themed: {
    margin: theme.spacing(1),
  },
}));

export const TunerDefEditor = ({ isOpen, data, onSave, onClose }) => {
  const [local, setLocal] = useState({ ...data, modes: new Set(data.modes) });
  const classes = useStyles();

  const updateState = (key, value) => {
    const newState = { ...local, [key]: value };
    setLocal(newState);
  };

  const setMode = (e) => {
    const modes = local.modes;
    if (e.target.checked) {
      modes.add(e.target.value);
    } else {
      modes.delete(e.target.value);
    }
    updateState("modes", modes);
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <TextField
          className={classes.themed}
          label="Key"
          value={local.key}
          onChange={(e) => updateState("key", e.target.value)}
        ></TextField>
        <TextField
          className={classes.themed}
          label="Label"
          value={local.label}
          onChange={(e) => updateState("label", e.target.value)}
        ></TextField>
        <TextField
          className={classes.themed}
          label="Control URL"
          value={local.controlUrl}
          onChange={(e) => updateState("controlUrl", e.target.value)}
        ></TextField>
        <TextField
          className={classes.themed}
          label="Audio URL"
          value={local.audioUrl}
          onChange={(e) => updateState("audioUrl", e.target.value)}
        ></TextField>
        <TextField
          className={classes.themed}
          label="Band Start"
          value={local.minFreq}
          type="number"
          onChange={(e) => updateState("minFreq", e.target.value)}
        ></TextField>
        <TextField
          className={classes.themed}
          label="Band End"
          value={local.maxFreq}
          type="number"
          onChange={(e) => updateState("maxFreq", e.target.value)}
        ></TextField>
        <FormControl className={classes.themed}>
          <FormLabel>Modes</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="FM"
              control={
                <Checkbox
                  value="fm"
                  checked={local.modes.has("fm")}
                  onChange={setMode}
                ></Checkbox>
              }
            />
            <FormControlLabel
              label="AM"
              control={
                <Checkbox
                  value="am"
                  checked={local.modes.has("am")}
                  onChange={setMode}
                ></Checkbox>
              }
            />
            <FormControlLabel
              label="LSB"
              control={
                <Checkbox
                  value="lsb"
                  checked={local.modes.has("lsb")}
                  onChange={setMode}
                ></Checkbox>
              }
            />
            <FormControlLabel
              label="USB"
              control={
                <Checkbox
                  value="usb"
                  checked={local.modes.has("usb")}
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
                  checked={local.showSquelch}
                  onChange={(e) => updateState("showSquelch", e.target.checked)}
                />
              }
            />
            <FormControlLabel
              label="Show Gain?"
              control={
                <Switch
                  checked={local.showGain}
                  onChange={(e) => updateState("showGain", e.target.checked)}
                />
              }
            />
            <FormControlLabel
              label="Show AGC?"
              control={
                <Switch
                  checked={local.showAgc}
                  onChange={(e) => updateState("showAgc", e.target.checked)}
                />
              }
            />
          </FormGroup>
        </FormControl>{" "}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            onClose(false);
            setLocal(data);
          }}
          color="secondary"
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            onClose(false);
            onSave(local);
          }}
          color="primary"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
