import React from "react";

export const StationInfo = ({ station }) => {
  if (!station) return <div />;

  const { designation, lat, lon, elevation } = station;

  return (
    <div>
      {designation} Coord: {lat + "," + -1 * +lon} Elev: {elevation} m
    </div>
  );
};
