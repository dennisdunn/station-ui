import React, { useEffect, useState, Fragment } from "react";
import { defaultStationInfo } from "./default.types";
import { callApi } from "./services";

export const StationInfo = ({ url }) => {
  const [state, setState] = useState(defaultStationInfo);

  useEffect(() => {
    callApi({ url: url }, ({ location }) => setState(location));
  }, [url]);

  return (
    <Fragment>
      {state.designation}&nbsp; Coord: {Number(state.lat)},{" "}
      {-1 * Number(state.lon)}&nbsp; Elev: {Number(state.elevation)} m
    </Fragment>
  );
};
