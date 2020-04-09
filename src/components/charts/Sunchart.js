import React from "react";
import PolarPlot from "./PolarPlot";

const transform = (options, data) => {
  // convert from el,az (degrees) to r,theta (radians)
  let points = data.map((d) => ({ r: d.el, theta: d.az / 57.2958 }));
  // rotate 90 degrees counter-clockwise
  points = points.map((d) => ({ r: d.r, theta: d.theta + Math.PI / 2 }));
  // mirror
  points = points.map((d) => ({ r: d.r, theta: d.theta - Math.PI }));
  // scale
  points = points.map((d) => ({
    r: d.r / -90 + 1,
    theta: d.theta,
  }));

  return points;
};

export const Sunchart = ({ options, data=[] }) => {
  const points = transform(options, data);

  return  <PolarPlot options={options} data={points} /> ;
};

export default Sunchart;
