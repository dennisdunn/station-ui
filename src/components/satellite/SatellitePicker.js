import { Card, CardContent, FormControl, InputLabel, makeStyles, MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { callApi } from "../services";

const useStyles = makeStyles((theme) => ({
  root: { maxWidth: "40ch", minWidth: "25ch" },
  formControl: { minWidth: 160 },
}));

export const SatellitePicker = ({ src, value, onChange }) => {
  const classes = useStyles();
  const [satellites, setSatellites] = useState([]);

  useEffect(() => {
    callApi({ url: src }, setSatellites);
  }, [src]);

  return (
    <Card className={classes.root}>
      <CardContent>
        <FormControl className={classes.formControl}>
          <InputLabel id="satlistlabel">Satellite</InputLabel>
          <Select
            labelId="satlistlabel"
            value={value||''}
            onChange={(e) => onChange(e.target.value)}
          >
            {satellites.map((s, i) => (
              <MenuItem key={i} value={s}>
                {s}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  );
};
