import React from "react";
import { Card, CardContent, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      minWidth: "25ch",
      maxWidth: "40ch",
      marginBottom: theme.spacing(1),
    },
  };
});

export const CardWrapper = ({ children }) => {
  const classes = useStyles();

  const content = React.Children.map((el) =>
    el.type.displayName.startsWith("Card")
  ).reduce((acc, current) => {
    return acc || current;
  }, false) ? (
    children
  ) : (
    <CardContent>{children}</CardContent>
  );

  return <Card className={classes.root}>{content}</Card>;
};
