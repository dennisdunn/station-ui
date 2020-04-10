import {
  Card,
  CardContent,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Sunchart } from "../charts";

const useStyles = makeStyles((theme) => ({
  root: { maxWidth: "40ch", minWidth: "25ch" },
}));

const format = (timestamp) => {
  return new Date(timestamp)
    .toISOString()
    .replace("T", " ")
    .replace(".000", "");
};

export const ElAz = ({ name, data = [] }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom>{name || "Azumith Plot"}</Typography>
        <Sunchart
          options={{ size: 200, numScales: 3, stroke: "red" }}
          data={data}
        />
        <br />
        <Typography variant="caption">
          {data[0] ? `Next pass @ ${format(data[0].utc)}` : null}
        </Typography>
        <TableContainer style={{ maxHeight: 225 }}>
          <Table padding="checkbox" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Az</TableCell>
                <TableCell>El</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((d) => (
                <TableRow>
                  <TableCell>{d.az}</TableCell>
                  <TableCell>{d.el}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};
