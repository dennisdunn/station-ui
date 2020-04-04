import {
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  Slider,
  Switch,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: { maxWidth: "30ch" },
  cardControls: { display: "flex", justifyItems: "end" },
}));

export const Sdr = ({ config, settings, onChange, children }) => {
  const classes = useStyles();
  const [current, setCurrent] = useState(settings);

  const updateState = (key, value) => {
    const newState = { ...current, [key]: value };
    setCurrent(newState);
  };

  const commitChange = (key, value) => {
    const kvp = {};
    kvp[key] = value;
    if (onChange) onChange(kvp);
  };

  const mkFrequencyControl = () => {
    return (
      <Slider
        value={current.freq}
        aria-labelledby="fLabel"
        valueLabelDisplay="off"
        step={0.1}
        min={config.minFreq}
        max={config.maxFreq}
        onChange={(e, v) => {
          updateState("freq", v);
        }}
        onChangeCommitted={(e, v) => {
          commitChange("freq", `${v}Mhz`);
        }}
      />
    );
  };

  const mkModeControl = () => {
    const modeList = Array.from(config.modes);
    return modeList.length > 1 ? (
      <RadioGroup
        row
        value={current.mode}
        onChange={(e, v) => {
          updateState("mode", v);
          commitChange("mode", v);
        }}
      >
        {modeList.map((m, i) => (
          <FormControlLabel
            key={i}
            value={m}
            control={<Radio />}
            label={m.toUpperCase()}
          />
        ))}
      </RadioGroup>
    ) : null;
  };

  const mkSquelchControl = () => {
    return config.useSquelch
      ? [
          <Typography>Squelch</Typography>,
          <Slider
            value={current.squelch}
            valueLabelDisplay="auto"
            valueLabelFormat={(v) => (v === 0 ? "Off" : `${v}`)}
            step={1}
            min={0}
            max={10}
            marks
            onChange={(e, v) => {
              updateState("squelch", v);
            }}
            onChangeCommitted={(e, v) => {
              commitChange("squelch", v);
            }}
          />,
        ]
      : null;
  };

  const mkGainControl = () => {
    return config.useGain
      ? [
          <Typography>Gain</Typography>,
          <Slider
            value={current.gain}
            valueLabelDisplay="auto"
            valueLabelFormat={(v) => (v < 0 ? "Auto" : `${v}`)}
            step={0.1}
            min={-0.1}
            max={50}
            onChange={(e, v) => {
              updateState("gain", v);
            }}
            onChangeCommitted={(e, v) => {
              commitChange("gain", v);
            }}
          />,
        ]
      : null;
  };

  const mkAgcControl = () => {
    return config.useAgc ? (
      <FormControl className={classes.cardControls}>
        <FormControlLabel
          label="AGC"
          labelPlacement="start"
          control={
            <Switch
              name="agc"
              checked={current.agc}
              onChange={(e) => {
                updateState("agc", e.target.checked);
                commitChange("gain", e.target.checked);
              }}
            />
          }
        />
      </FormControl>
    ) : null;
  };

  const mkAudioControl = () => {
    return config.audioUrl ? <audio src={config.audioUrl} autoPlay /> : null;
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <FormLabel>{config.label}</FormLabel>
        {mkModeControl()}
        <Typography id="fLabel">{current.freq} MHz</Typography>
        {mkFrequencyControl()}
        {mkSquelchControl()}
        {mkGainControl()}
        {mkAgcControl()}
        {mkAudioControl()}
      </CardContent>
      <CardActions>{children}</CardActions>
    </Card>
  );
};
