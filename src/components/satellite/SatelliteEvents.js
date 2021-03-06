import {
  Card,
  CardContent,
  makeStyles,
  Table,
  TableBody,
  Typography,
  TableContainer,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { SatelliteEventRow } from "./SatelliteEventRow";

const useStyles = makeStyles((theme) => ({
  root: { maxWidth: "40ch", minWidth: "25ch" },
}));

export const SatelliteEvents = ({ url, onSelected }) => {
  const classes = useStyles();
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then(setState);
  }, [url]);

  useEffect(() => {
    const timer = setInterval(() => {
      fetch(url)
        .then((resp) => resp.json())
        .then(setState);
    }, 1000);
    return () => clearInterval(timer);
  }, [url]);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom>AOS</Typography>
        <TableContainer style={{ maxHeight: 400 }}>
          <Table padding="checkbox">
            <TableBody>
              {state
                .filter((x) => x.nextEvent > 0)
                .sort((a, b) => a.nextEvent - b.nextEvent)
                .map((x, i) => (
                  <SatelliteEventRow data={x} key={i} onClick={onSelected} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};
