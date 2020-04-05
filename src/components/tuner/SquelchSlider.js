import { Slider, FormControlLabel } from "@material-ui/core";
import React from "react";

export const SquelchSlider = ({ visible, value, onChange, onCommitted }) => {
  return visible ? (
    <FormControlLabel
      label="Squelch"
      labelPlacement="top"
      control={
        <Slider
          value={value || 0}
          valueLabelDisplay="auto"
          valueLabelFormat={(v) => (v === 0 ? "Off" : `${v}`)}
          step={1}
          min={0}
          max={10}
          marks
          onChange={(e, v) => {
            onChange({ squelch: v });
          }}
          onChangeCommitted={(e, v) => {
            onCommitted({ squelch: v });
          }}
        />
      }
    />
  ) : null;
};
