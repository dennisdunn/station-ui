import {
  Card,
  CardContent,
  makeStyles,
  Table,
  TableBody,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { callApi } from "../services";
import { SatelliteEventRow } from "./SatelliteEventRow";

const useStyles = makeStyles((theme) => ({
  root: { maxWidth: "40ch", minWidth: "25ch" },
}));

export const SatelliteEvents = ({ src, data, onSelected }) => {
  const classes = useStyles();
  const [state, setState] = useState([]);

  useEffect(() => {
    setState((prev) => []);
    data.forEach((s) =>
      callApi({ url: `${src}/${s}?fields=name,nextEvent,orbitNum` }, (d) =>
        setState((prev) => [...prev, d])
      )
    );
  }, [src, data]);

  useEffect(() => {
    const timer = setInterval(() => {
      setState((prev) => [...prev]);
    }, 1000);
    return () => clearInterval(timer);
  }, [src, data]);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom>AOS</Typography>
        <Table padding="checkbox">
          <TableBody>
            {state
              .filter(x=>x.orbitNum > 0)
              .sort((a, b) => a.nextEvent - b.nextEvent)
              .map((x, i) => (
                <SatelliteEventRow data={x} key={i} onClick={onSelected} />
              ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
