import { Button, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { valueFormatters } from "./services";

export const SatelliteEventRow = ({ data,  onClick }) => {
  const delta = valueFormatters["deltat"](
    data.nextEvent - Date.now().valueOf()
  );
  return (
    <TableRow>
      <TableCell>
        <Button variant="text" onClick={() => onClick(data.name)}>
          {data.name}
        </Button>
      </TableCell>
      <TableCell>{delta}</TableCell>
    </TableRow>
  );
};
