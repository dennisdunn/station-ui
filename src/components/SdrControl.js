import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
  Slider,
  Switch,
  Typography
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { callApi } from "./services";

const useStyles = makeStyles(theme => ({
  root: { maxWidth: "40ch" }
}));

const gainDisplay = v => {
  return v === 0 ? "Auto" : `${v}`;
};

export const SdrControl = ({ source, onApply }) => {
  const classes = useStyles();
  const [freq, setFreq] = useState(88);
  const [mode, setMode] = useState(0);
  const [gain, setGain] = useState(0);
  const [squelch, setSquelch] = useState(0);
  const [agc, setAgc] = useState(0);

  useEffect(() => {
    callApi({ url: source }, data => {
      if (!data.freq) return;
      setFreq(data.freq);
      setMode(data.mode);
      setGain(data.gain);
      setSquelch(data.squelch);
      setAgc(data.agc);
    });
  }, [source]);

  return (
    <Card className={classes.root}>
      <CardContent>
        <FormControl>
          <RadioGroup
            row
            value={mode}
            onChange={(e,v) => {
              setMode(Number.parseInt(v));
            }}
          >
            <FormControlLabel
              value={0}
              control={<Radio />}
              label="FM"
              labelPlacement="top"
            />
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="AM"
              labelPlacement="top"
            />
            <FormControlLabel
              value={2}
              control={<Radio />}
              label="LSB"
              labelPlacement="top"
            />
            <FormControlLabel
              value={3}
              control={<Radio />}
              label="USB"
              labelPlacement="top"
            />
          </RadioGroup>
          <Typography id="fLabel">{freq} MHz</Typography>
          <Slider
            value={freq}
            aria-labelledby="fLabel"
            valueLabelDisplay="off"
            step={0.1}
            min={88}
            max={150}
            onChange={(e, v) => {
              setFreq(v);
            }}
          />
          <Typography id="sLabel">Squelch</Typography>
          <Slider
            value={squelch}
            aria-labelledby="sLabel"
            valueLabelDisplay="auto"
            step={1}
            min={0}
            max={10}
            marks
            onChange={(e, v) => {
              setSquelch(v);
            }}
          />
          <Typography id="gLabel">Gain</Typography>
          <Slider
            value={gain}
            aria-labelledby="gLabel"
            valueLabelDisplay="auto"
            valueLabelFormat={gainDisplay}
            step={0.1}
            min={0}
            max={50}
            onChange={(e, v) => {
              setGain(v);
            }}
          />
          <FormControlLabel
            label="AGC"
            labelPlacement="start"
            control={
              <Switch
                name="agc"
                checked={agc === 1}
                onChange={e => {
                  setAgc(e.target.checked ? 1 : 0);
                }}
              />
            }
          />
        </FormControl>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => onApply({ mode, freq, squelch, gain, agc })}
          disabled={!onApply}
        >
          Apply
        </Button>
      </CardActions>
    </Card>
  );
};
