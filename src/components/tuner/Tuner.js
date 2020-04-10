import { FormGroup, Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import {
  AgcSwitch,
  FrequencySlider,
  GainSlider,
  ModePicker,
  SquelchSlider,
} from ".";

export const Tuner = ({
  definition,
  freq,
  mode,
  squelch,
  gain,
  agc,
  onChange,
}) => {
  return (
    <Fragment>
      <Typography gutterBottom>{definition.label || "Tuner"}</Typography>
      <FormGroup>
        {definition.modes.size > 1 ? (
          <ModePicker
            value={mode}
            modes={definition.modes}
            onChange={onChange}
          />
        ) : null}
        <FrequencySlider
          value={freq}
          min={definition.min}
          max={definition.max}
          onChange={onChange}
        />
        {definition.showSquelch ? (
          <SquelchSlider value={squelch} onChange={onChange} />
        ) : null}
        {definition.showGain ? (
          <GainSlider value={gain} onChange={onChange} />
        ) : null}
        {definition.showAgc ? (
          <AgcSwitch value={agc} onChange={onChange} />
        ) : null}
      </FormGroup>
    </Fragment>
  );
};
