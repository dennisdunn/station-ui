import React, { useState, useEffect } from "react";
import { FormControlLabel, Slider } from "@material-ui/core";

export const GainSlider = ({ value = -0.1, onChange }) => {
  const [local, setLocal] = useState(value);

  useEffect(() => {
    setLocal(value);
  }, [value]);

  return (
    <FormControlLabel
      label="Gain"
      labelPlacement="top"
      control={
        <Slider
          value={local}
          valueLabelDisplay="auto"
          valueLabelFormat={(v) => (v < 0 ? "Auto" : `${v}`)}
          step={0.1}
          min={-0.1}
          max={50}
          onChange={(e, v) => setLocal(v)}
          onChangeCommitted={(e, v) => {
            onChange({ gain: v < 0 ? "auto" : v });
          }}
        />
      }
    />
  );
};
