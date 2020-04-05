import {
  Card,
  CardActions,
  CardContent,
  FormGroup,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import {
  AgcSwitch,
  AudioStreamer,
  FrequencySlider,
  GainSlider,
  ModePicker,
  SquelchSlider,
  TunerPresets,
} from "./tuner";

const useStyles = makeStyles((theme) => ({
  root: { maxWidth: "40ch", minWidth: "25ch" },
  cardControls: { display: "flex", justifyItems: "end" },
}));

export const Tuner = ({ config, presets, onChange, children }) => {
  const classes = useStyles();
  const [current, setCurrent] = useState(presets.stations[0]);

  const updateState = (kvp) => {
    const newState = { ...current, ...kvp };
    setCurrent(newState);
  };

  const commitChange = (kvp) => {
    onChange(kvp);
  };

  const addStation = (label) => {
    presets.stations.push({ ...current, label: label });
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom>{config.label}</Typography>
        <FormGroup>
          <ModePicker
            visible={config.modes.size > 1}
            value={current.mode}
            modes={config.modes}
            onChange={(kvp) => {
              updateState(kvp);
              commitChange(kvp);
            }}
          />
          <FrequencySlider
            visible
            value={current.freq}
            min={config.minFreq}
            max={config.maxFreq}
            onChange={updateState}
            onCommited={commitChange}
          />
          <TunerPresets
            visible
            presets={presets}
            onSelected={setCurrent}
            onAddStation={addStation}
          />
          <SquelchSlider
            visible={config.showSquelch}
            value={current.squelch}
            onChange={updateState}
            onCommitted={commitChange}
          />
          <GainSlider
            visible={config.showGain}
            value={current.gain}
            onChange={updateState}
            onCommitted={commitChange}
          />
          <AgcSwitch
            visible={config.showAgc}
            value={current.agc}
            onChange={(kvp) => {
              updateState(kvp);
              commitChange(kvp);
            }}
          />
          <AudioStreamer enabled source={config.audioUrl} />
        </FormGroup>
      </CardContent>
      <CardActions>{children}</CardActions>
    </Card>
  );
};
