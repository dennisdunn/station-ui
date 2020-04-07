import React, { useEffect, useState, Fragment } from "react";
import { defaultStationInfo } from "./default.types";
import { callApi } from "./services";

export const StationInfo = ({ station }) => {
  const [state, setState] = useState(defaultStationInfo);

  useEffect(() => {
    callApi({ url: station }, ({ location }) => setState(location));
  }, [station]);

  return (
    <Fragment>
      {state.designation}&nbsp; Coord: {Number(state.lat)},{" "}
      {-1 * Number(state.lon)}&nbsp; Elev: {Number(state.elevation)} m
    </Fragment>
  );
};
