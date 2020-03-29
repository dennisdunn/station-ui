import React, { useState, useEffect } from "react";
import { callApi } from "./services";

export const StationInfo = ({ source }) => {
  const [state, setState] = useState({
    designation: "",
    lat: "",
    lon: "",
    elevation: ""
  });

  useEffect(() => {
    callApi({ url: source }, ({ location }) => setState(location));
  }, [source]);

  return (
    <div>
      {state.designation}&nbsp;
      Coord: {Number(state.lat)}, {-1 * Number(state.lon)}&nbsp;
      Elev: {Number(state.elevation)} m
    </div>
  );
};
