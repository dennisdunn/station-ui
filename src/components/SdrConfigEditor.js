import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  makeStyles,
  Switch,
  TextField,
  ButtonGroup
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles(theme => ({
  root: { maxWidth: "40ch" },
  cardControls: { display: "flex", justifyItems: "end" },
  select: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const defaultState = {
  key: "",
  label: "",
  controlUrl: "",
  audioUrl: "",
  minFreq: 0,
  maxFreq: 0,
  modes: new Set(),
  useGain: false,
  useSquelch: false,
  useAgc: false
};

export const SdrConfigEditor = ({ config, onSave, onCancel }) => {
  if (config && config.modes) {
    config = { ...config, modes: new Set(config.modes) };
  }
  const classes = useStyles();
  const [state, setState] = useState({ ...defaultState, ...config });

  const cancel = () => {
    setState({ ...defaultState, ...config });
    if (onCancel) onCancel();
  };

  const save = () => {
    if (onSave) {
      onSave({ ...state, modes: Array.from(state.modes) });
    } else {
      console.log(state);
    }
  };

  const setMode = e => {
    const modes = state.modes;
    if (e.target.checked) {
      modes.add(e.target.value);
    } else {
      modes.delete(e.target.value);
    }
    setState({ ...state, modes });
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <TextField
          label="Key"
          value={state.key}
          onChange={e => setState({ ...state, key: e.target.value })}
        ></TextField>
        <TextField
          label="Label"
          value={state.label}
          onChange={e => setState({ ...state, label: e.target.value })}
        ></TextField>
        <TextField
          label="Control URL"
          value={state.controlUrl}
          onChange={e => setState({ ...state, controlUrl: e.target.value })}
        ></TextField>
        <TextField
          label="Audio URL"
          value={state.audioUrl}
          onChange={e => setState({ ...state, audioUrl: e.target.value })}
        ></TextField>
        <TextField
          label="Band Start"
          value={state.minFreq}
          type="number"
          onChange={e => setState({ ...state, minFreq: e.target.value })}
        ></TextField>
        <TextField
          label="Band End"
          value={state.maxFreq}
          type="number"
          onChange={e => setState({ ...state, maxFreq: e.target.value })}
        ></TextField>
        <FormControl>
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
          <FormControl>
            <FormLabel>Interface</FormLabel>
            <FormGroup row>
              <FormControlLabel
                label="Show Squelch?"
                control={
                  <Switch 
                    checked={state.useSquelch}
                    onChange={e =>
                      setState({ ...state, useSquelch: e.target.checked })
                    }
                  />
                }
              />
              <FormControlLabel
                label="Show Gain?"
                control={
                  <Switch
                    checked={state.useGain}
                    onChange={e =>
                      setState({ ...state, useGain: e.target.checked })
                    }
                  />
                }
              />
              <FormControlLabel
                label="Show AGC?"
                control={
                  <Switch
                    checked={state.useAgc}
                    onChange={e =>
                      setState({ ...state, useAgc: e.target.checked })
                    }
                  />
                }
              />
            </FormGroup>
          </FormControl>
        </FormControl>
      </CardContent>
      <CardActions>
        <ButtonGroup>
          <Button color='secondary' onClick={cancel}>Cancel</Button>
          <Button color='primary' onClick={save}>Save</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};
