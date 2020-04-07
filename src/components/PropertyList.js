import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import React from "react";

export const PropertyList = ({ data }) => {
  return data ? (
    <Table padding="checkbox">
      <TableBody>
        {Object.keys(data).map((k, i) => (
          <TableRow key={i}>
            <TableCell>{k}</TableCell>
            <TableCell>{data[k]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ) : null;
};
