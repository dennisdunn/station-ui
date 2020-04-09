// see https://itnext.io/react-svg-radar-chart-a89d15760e8

import React from "react";

const polarToCartesian = (point) => {
  return {
    x: point.r * Math.cos(point.theta),
    y: point.r * Math.sin(point.theta),
  };
};

const scale = (options, value) => (
  <circle
    key={`scale-${value}`}
    cx={0}
    cy={0}
    r={((value / options.numScales) * options.size) / 2}
    fill="#FAFAFA"
    stroke="#999"
    strokeWidth="0.2"
  />
);

const path = (options, data) => {
  const scale = options.size / 2;
  const points = data.map((d) => `${scale * d.x},${scale * d.y}`).join(" ");
  return (
    <polyline
      stroke={options.stroke || "black"}
      fill={options.fill || "none"}
      points={points}
    />
  );
};

export const PolarPlot = ({ options, data }) => {
  const points = data.map(polarToCartesian);

  const groups = [];
  const scales = [];
  const paths = [];

  for (let i = options.numScales; i > 0; i--) {
    scales.push(scale(options, i));
  }

  paths.push(path(options, points));

  const middleOfChart = (options.size / 2).toFixed(4);

  groups.push(<g key={`scales`}>{scales}</g>);
  groups.push(<g key={`paths`}>{paths}</g>);

  return (
    <svg
      version="1"
      xmlns="http://www.w3.org/2000/svg"
      width={options.size}
      height={options.size}
    >
      <g transform={`translate(${middleOfChart},${middleOfChart})`}>{groups}</g>
    </svg>
  );
};

export default PolarPlot;
