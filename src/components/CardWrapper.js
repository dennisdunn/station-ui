import React from "react";
import { Card, CardContent, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      minWidth: "25ch",
      maxWidth: "40ch",
      marginBottom:theme.spacing(1)
    },
  };
});

export const CardWrapper = ({ children }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
