import {
  Card,
  CardContent,
  FormGroup,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  AgcSwitch,
  AudioStreamer,
  FrequencySlider,
  GainSlider,
  ModePicker,
  SquelchSlider,
  TunerPresets,
} from ".";

const defaultState = {
  label: "",
  freq: 0.5,
  mode: "fm",
  gain: "auto", // auto
  squelch: 0, // off
  agc: false,
};

const useStyles = makeStyles((theme) => ({
  root: { maxWidth: "40ch", minWidth: "25ch" },
  cardControls: { display: "flex", justifyItems: "end" },
}));

export const Tuner = ({ definition, onTune, onChange }) => {
  const classes = useStyles();
  const [current, setCurrent] = useState(defaultState);

  useEffect(() => {
    setCurrent(
      definition.presets[0] || { ...defaultState, freq: definition.minFreq }
    );
  }, [definition]);

  const updateState = (kvp) => {
    setCurrent({ ...current, ...kvp });
  };

  const addPreset = (label) => {
    definition.presets.push({ ...current, label: label });
    onChange(definition);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom>{definition.label}</Typography>
        <FormGroup>
          <ModePicker
            visible={definition.modes.size > 1}
            value={current.mode}
            modes={definition.modes}
            onChange={(kvp) => {
              updateState(kvp);
              onTune(kvp);
            }}
          />
          <FrequencySlider
            visible
            value={current.freq}
            min={definition.minFreq}
            max={definition.maxFreq}
            onChange={updateState}
            onCommited={onTune}
          />
          <TunerPresets
            presets={definition.presets}
            onSelected={setCurrent}
            onNew={addPreset}
          />
          <SquelchSlider
            visible={definition.showSquelch}
            value={current.squelch}
            onChange={updateState}
            onCommitted={onTune}
          />
          <GainSlider
            visible={definition.showGain}
            value={current.gain}
            onChange={updateState}
            onCommitted={onTune}
          />
          <AgcSwitch
            visible={definition.showAgc}
            value={current.agc}
            onChange={(kvp) => {
              updateState(kvp);
              onTune(kvp);
            }}
          />
          <AudioStreamer enabled source={definition.audioUrl} />
        </FormGroup>
      </CardContent>
    </Card>
  );
};
