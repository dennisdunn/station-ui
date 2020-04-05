import React from "react";
import { FormControlLabel, Slider } from "@material-ui/core";

export const GainSlider = ({ visible, value, onChange, onCommitted }) => {
  value = value === "auto" ? -0.1 : value;
  
  return visible ? (
    <FormControlLabel
      label="Gain"
      labelPlacement="top"
      control={
        <Slider
          value={value}
          valueLabelDisplay="auto"
          valueLabelFormat={(v) => (v < 0 ? "Auto" : `${v}`)}
          step={0.1}
          min={-0.1}
          max={50}
          onChange={(e, v) => {
            onChange({ gain: v });
          }}
          onChangeCommitted={(e, v) => {
            onCommitted({ gain: v < 0 ? "auto" : v });
          }}
        />
      }
    />
  ) : null;
};
