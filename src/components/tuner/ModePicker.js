import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React, { useState } from "react";

export const ModePicker = ({ value, modes, onChange }) => {
  const [local, setLocal] = useState(value);

  return (
    <RadioGroup
      row
      value={local}
      onChange={(e, v) => {
        setLocal(v);
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
  );
};
