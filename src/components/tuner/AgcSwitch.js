import React from "react";
import { FormControlLabel, Switch } from "@material-ui/core";

export const AgcSwitch = ({ visible, value, onChange }) => {
  return visible ? (
    <FormControlLabel
      label="AGC"
      labelPlacement="start"
      control={
        <Switch
          name="agc"
          checked={value}
          onChange={(e) => {
            onChange({ agc: e.target.checked });
          }}
        />
      }
    />
  ) : null;
};
