import React from "react";
import { StreamPlayer } from ".";
import { Card, CardContent, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: { maxWidth: "40ch", minWidth: "25ch" },
  cardControls: { display: "flex", justifyItems: "end" },
}));

export const AudioCard = ({ url, ...rest }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <StreamPlayer url={url} {...rest} />
      </CardContent>
    </Card>
  );
};
