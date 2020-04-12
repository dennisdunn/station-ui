import {
  Button,
  Divider,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { getUrl } from "../../config";

const useStyles = makeStyles((theme) => ({
  root: { margin: theme.spacing(1) },
}));

export const NavDrawer = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>Tools</Typography>
      <Divider />
      <List>
        <ListItem>
          <Button href={getUrl("apiAdmin")} target="_blank" size="small">
            API Admin
          </Button>
        </ListItem>
        <ListItem>
          <Button href={getUrl("streamAdmin")} target="_blank" size="small">
            Audio streams
          </Button>
        </ListItem>
      </List>
    </div>
  );
};
