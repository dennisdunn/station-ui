import React, { useEffect, useState, Fragment } from "react";

export const initState = {
  designation: "",
  lat: "",
  lon: "",
  elevation: "",
};

export const StationInfo = ({ url }) => {
  const [state, setState] = useState(initState);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setState(data.location));
  }, [url]);

  return (
    <Fragment>
      {state.designation}&nbsp; Coord: {Number(state.lat)},{" "}
      {-1 * Number(state.lon)}&nbsp; Elev: {Number(state.elevation)} m
    </Fragment>
  );
};
