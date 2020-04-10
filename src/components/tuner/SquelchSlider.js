import { Slider, FormControlLabel } from "@material-ui/core";
import React, { useState, useEffect } from "react";

export const SquelchSlider = ({ value = 0, onChange }) => {
  const [local, setLocal] = useState(value);

  useEffect(() => {
    setLocal(value);
  }, [value]);

  return (
    <FormControlLabel
      label="Squelch"
      labelPlacement="top"
      control={
        <Slider
          value={local}
          valueLabelDisplay="auto"
          valueLabelFormat={(v) => (v === 0 ? "Off" : `${v}`)}
          step={1}
          min={0}
          max={10}
          marks
          onChange={(e, v) => setLocal(v)}
          onChangeCommitted={(e, v) => {
            onChange({ squelch: v });
          }}
        />
      }
    />
  );
};
