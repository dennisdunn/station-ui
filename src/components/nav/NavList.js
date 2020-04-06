import { Divider, List, ListItem, Typography } from "@material-ui/core";
import React from "react";

export const NavList = ({ title, children, onNew }) => {
  const label = title.endsWith("s")
    ? title.substring(0, title.length - 1)
    : title;

  return (
    <div>
      <Typography>{label}s</Typography>
      <Divider />
      <List>
        <ListItem
          button
          onClick={onNew}
        >
          <Typography variant="caption">
            <em>New {label}...</em>
          </Typography>
        </ListItem>
        {children}
      </List>
    </div>
  );
};
