import React, { useEffect, useState } from "react";
import { stationInfo as defaultStation } from "./default.types";
import { callApi } from "./services";

export const StationInfo = ({ source }) => {
  const [state, setState] = useState(defaultStation);

  useEffect(() => {
    callApi({ url: source }, ({ location }) => setState(location));
  }, [source]);

  return (
    <div>
      {state.designation}&nbsp; Coord: {Number(state.lat)},{" "}
      {-1 * Number(state.lon)}&nbsp; Elev: {Number(state.elevation)} m
    </div>
  );
};
