import React from "react";
import PolarChart from "./PolarChart";

const transform = (options, data) => {
  const maxR = 1;//options.size / 2;
  // convert from el,az (degrees) to r,theta (radians)
  let points = data.map((d) => ({ r: d.el, theta: d.az / 57.2958 }));
  // rotate 90 degrees counter-clockwise
  points = points.map((d) => ({ r: d.r, theta: d.theta + Math.PI / 2 }));
  // mirror
  points = points.map((d) => ({ r: d.r, theta: d.theta - Math.PI }));
  // scale
  points = points.map((d) => ({
    r: (d.r * maxR) / -90 + maxR,
    theta: d.theta,
  }));

  return points;
};

export const Sunchart = ({ options, data }) => {
  const points = transform(options, data);

  return <PolarChart options={options} data={points} />;
};

export default Sunchart;
