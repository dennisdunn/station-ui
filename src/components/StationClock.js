import React, { useEffect, useState, Fragment } from "react";
import { Typography } from "@material-ui/core";

const trimTime = (t) => {
  const i = t.lastIndexOf(":");
  return t.substring(0, i);
};

const trimLocalTime = (t) => {
  const parts = t.split(" ");
  parts[0] = trimTime(parts[0]);
  return parts.join(" ");
};

export const StationClock = () => {
  const [localTime, setCurrent] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Fragment>
      <Typography variant="body">
        Local: {localTime.toLocaleDateString()},{" "}
        {trimLocalTime(localTime.toLocaleTimeString())}
      </Typography>{" "}
      <Typography variant="body">
        UTC: {localTime.toISOString().split("T")[0]}{" "}
        {trimTime(localTime.toISOString().split("T")[1])}
      </Typography>
    </Fragment>
  );
};
