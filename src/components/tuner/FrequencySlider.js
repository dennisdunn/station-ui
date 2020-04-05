import { FormControlLabel, Slider } from "@material-ui/core";
import React from "react";

export const FrequencySlider = ({
  visible,
  value,
  min,
  max,
  step,
  onChange,
  onCommited,
}) => {
  return visible ? (
    <FormControlLabel
      label={`${value} MHz`}
      labelPlacement="top"
      control={
        <Slider
          value={value}
          valueLabelDisplay="off"
          step={step || 0.1}
          min={min}
          max={max}
          onChange={(e, v) => {
            onChange({ freq: v });
          }}
          onChangeCommitted={(e, v) => {
            onCommited({ freq: `${v}Mhz` });
          }}
        />
      }
    />
  ) : null;
};
