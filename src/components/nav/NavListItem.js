import React from "react";
import { ListItem } from "@material-ui/core";

export const NavListItem = ({ value, onClick }) => {
  return (
    <ListItem button onClick={() => onClick(value)}>
      {value.label || value.name || value.id}
    </ListItem>
  );
};
