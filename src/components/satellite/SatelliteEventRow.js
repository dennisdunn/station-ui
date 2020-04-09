import { Button, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { valueFormatters } from "./services";

export const SatelliteEventRow = ({ data, key, onClick }) => {
  const delta = valueFormatters["deltat"](
    data.nextEvent - Date.now().valueOf()
  );
  return (
    <TableRow key={key}>
      <TableCell>
        <Button variant="text" onClick={() => onClick(data.name)}>
          {data.name}
        </Button>
      </TableCell>
      <TableCell>{delta}</TableCell>
    </TableRow>
  );
};
