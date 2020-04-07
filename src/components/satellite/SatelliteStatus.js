import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { PropertyList } from "../PropertyList";
import { callApi } from "../services";
import { format } from "./services";

const useStyles = makeStyles((theme) => ({
  root: { maxWidth: "40ch", minWidth: "25ch" },
}));

const valueFormatters = {
  nextEvent: (x) =>
    new Date(x * 1e3).toISOString().replace("T", " ").replace(".000", ""),
};
export const SatelliteStatus = ({ name, src }) => {
  const classes = useStyles();
  const [state, setState] = useState({});

  useEffect(() => {
    callApi({ url: `${src}/${name}` }, setState);
  }, [name, src]);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom>Status</Typography>
        <PropertyList data={format(state, valueFormatters)} />
      </CardContent>
    </Card>
  );
};
