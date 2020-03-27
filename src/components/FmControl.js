import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React, { useState } from "react";
import NumericInput from "react-numeric-input";
import { udp } from "./services";

export const FmControl = ({ host, port }) => {
  const [state, setState] = useState({
    freq: 102.9,
    mode: 0,
    gain: 0,
    squelch: 0,
    agc: 0
  });

  const setMode = evt => {
    const value = +evt.target.value;
    setState({ ...state, mode: value });
    udp(`mode ${value}`, host, port);
  };

  const setAgc = evt => {
    const value = +evt.target.value;
    setState({ ...state, agc: value });
    udp(`agc ${value}`, host, port);
  };

  const setFreq = evt => {
    const value = evt;
    setState({ ...state, freq: value });
    udp(`freq ${value * 1e6}`, host, port);
  };

  return (
    <div>
      <NumericInput
        min={88}
        max={500}
        step={0.2}
        precision={1}
        snap
        value={state.freq}
        onChange={setFreq}
      />
      <RadioGroup row value={state.mode} onChange={setMode}>
        <FormControlLabel
          labelPlacement="bottom"
          value={0}
          control={<Radio color="primary" />}
          label="FM"
        />
        <FormControlLabel
          labelPlacement="bottom"
          value={1}
          control={<Radio color="primary" />}
          label="AM"
        />
        <FormControlLabel
          labelPlacement="bottom"
          value={2}
          control={<Radio color="primary" />}
          label="USB"
        />
        <FormControlLabel
          labelPlacement="bottom"
          value={3}
          control={<Radio color="primary" />}
          label="LSB"
        />
      </RadioGroup>
      <RadioGroup row value={state.agc} onChange={setAgc}>
        <FormControlLabel
          labelPlacement="bottom"
          value={1}
          control={<Radio color="primary" />}
          label="On"
        />
        <FormControlLabel
          labelPlacement="bottom"
          value={0}
          control={<Radio color="primary" />}
          label="Off"
        />
      </RadioGroup>
    </div>
  );
};

/**
freq (./udpclient.py freq 101900000)

 mode (./udpclient.py mode 0 (for fm))
    0 = FM
    1 = AM
    2 = USB
    3 = LSB

squelch (./udpclient.py squelch 0)
    0 = OFF
    n = Value

gain (./udpclient.py gain auto)
    auto = Automatic
    n = Gainvalue; 195 = 19.5db

agc (./udpclient.py agc 1)
    0 = OFF
    1 = ON
 */
