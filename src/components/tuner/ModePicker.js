import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React from "react";

export const ModePicker = ({ visible, value, modes, onChange }) => {
  
  return visible ? (
    <RadioGroup
      row
      value={value || modes[0]}
      onChange={(e, v) => {
        onChange({ mode: v });
      }}
    >
      {Array.from(modes.values()).map((m, i) => (
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
