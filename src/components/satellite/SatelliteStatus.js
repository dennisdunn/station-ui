import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { PropertyList } from "../PropertyList";
import { callApi } from "../services";
import { format } from "./services";

const useStyles = makeStyles((theme) => ({
  root: { maxWidth: "40ch", minWidth: "25ch" },
}));

export const SatelliteStatus = ({ name, src }) => {
  const classes = useStyles();
  const [state, setState] = useState({});

  useEffect(() => {
    callApi({ url: `${src}/${name}` }, setState);
  }, [name, src]);

  useEffect(() => {
    const timer = setInterval(() => {
      callApi({ url: `${src}/${name}` }, setState);
    }, 60000);
    return () => clearInterval(timer);
  });

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom>Status</Typography>
        <PropertyList data={format(state)} />
      </CardContent>
    </Card>
  );
};
