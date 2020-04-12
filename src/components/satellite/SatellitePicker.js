import { Card, CardContent, FormControl, InputLabel, makeStyles, MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: { maxWidth: "40ch", minWidth: "25ch" },
  formControl: { minWidth: 160 },
}));

export const SatellitePicker = ({ url, value, onChange }) => {
  const classes = useStyles();
  const [state, setState] = useState([]);

  useEffect(() => { fetch(url)
    .then((resp) => resp.json())
    .then(setState);
  }, [url]);

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
            {state.map((s, i) => (
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
