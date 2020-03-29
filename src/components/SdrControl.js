import { Button, Card, CardActionArea, CardActions, CardContent, FormControl, FormControlLabel, makeStyles, Radio, RadioGroup, Switch, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { callApi } from "./services";

const useStyles = makeStyles(theme => ({
  root: { maxWidth: "40ch" }
}));

export const SdrControl = ({ source, onApply }) => {
  const classes = useStyles();
  const [freq, setFreq] = useState("");
  const [mode, setMode] = useState(0);
  const [gain, setGain] = useState("0");
  const [squelch, setSquelch] = useState("0");
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
      <CardActionArea>
        <CardContent>
          <Typography variant="h6">Tuner</Typography>
          <FormControl>
            <RadioGroup
              row
              value={mode}
              name="mode"
              onChange={e => {
                setMode(Number.parseFloat(e.target.value));
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
            <TextField
              name="freq"
              value={freq}
              label="Frequency MHz"
              onChange={e => {
                setFreq(e.target.value);
              }}
            />
            <TextField
              name="squelch"
              value={squelch}
              label="Squelch"
              onChange={e => {
                setSquelch(e.target.value);
              }}
            />
            <TextField
              name="gain"
              value={gain === "0" ? "auto" : gain}
              label="Gain"
              onChange={e => {
                setGain(e.target.value);
              }}
            />
            <FormControlLabel
              label="AGC"
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
      </CardActionArea>
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
