import { FormControlLabel, Slider } from "@material-ui/core";
import React, { useState, useEffect } from "react";

export const FrequencySlider = ({
  value = 0,
  step = 0.1,
  min = 0.5,
  max = 1750,
  onChange,
}) => {
  const [local, setLocal] = useState(0);

  useEffect(() => {
    setLocal(value || min);
  }, [value, min]);

  return (
    <FormControlLabel
      label={`${local} MHz`}
      labelPlacement="top"
      control={
        <Slider
          value={local}
          valueLabelDisplay="off"
          step={step}
          min={min}
          max={max}
          onChange={(e, v) => setLocal(v)}
          onChangeCommitted={(e, v) => {
            onChange({ freq: `${v}MHz` });
          }}
        />
      }
    />
  );
};
