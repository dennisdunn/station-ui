import React, { useState } from "react";
import { FormControlLabel, Switch } from "@material-ui/core";

export const AgcSwitch = ({ value = false, onChange }) => {
  const [local, setLocal] = useState(value);

  return (
    <FormControlLabel
      label="AGC"
      labelPlacement="start"
      control={
        <Switch
          name="agc"
          checked={local}
          onChange={(e) => {
            setLocal(e.target.checked);
            onChange({ agc: e.target.checked });
          }}
        />
      }
    />
  );
};
