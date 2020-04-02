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
  Typography
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles(theme => ({
  root: { maxWidth: "40ch" },
  cardControls: { display: "flex", justifyItems: "end" }
}));

export const SdrControl = ({ config, settings }) => {
  const classes = useStyles();
  const [current, setCurrent] = useState(settings);

  const mkModeControl = () => {
    return config.modes.length > 1 ? (
      <RadioGroup
        row
        value={current.mode}
        onChange={(e, v) => {
          setCurrent({ ...current, mode: v });
        }}
      >
        {config.modes.map((m, i) => (
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
            valueLabelFormat={v => (v === 0 ? "Off" : `${v}`)}
            step={1}
            min={0}
            max={10}
            marks
            onChange={(e, v) => {
              setCurrent({ ...current, squelch: v });
            }}
          />
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
            valueLabelFormat={v => (v === 0 ? "Auto" : `${v}`)}
            step={0.1}
            min={0}
            max={50}
            marks
            onChange={(e, v) => {
              setCurrent({ ...current, gain: v });
            }}
          />
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
              onChange={e => {
                setCurrent({ ...current, agc: e.target.checked });
              }}
            />
          }
        />
      </FormControl>
    ) : null;
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <FormLabel>{config.label}</FormLabel>
        {mkModeControl()}
        <Typography id="fLabel">{current.freq} MHz</Typography>
        <Slider
          value={current.freq}
          aria-labelledby="fLabel"
          valueLabelDisplay="off"
          step={0.1}
          min={config.minFreq}
          max={config.maxfreq}
          onChange={(e, v) => {
            setCurrent({ ...current, freq: v });
          }}
        />
        {mkSquelchControl()}
        {mkGainControl()}
        {mkAgcControl()}
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};
