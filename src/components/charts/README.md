# Simple charts

## Polar plot
This is NOT a radar chart, it is barely a chart at all. It plots data points of the form {r, theta} with theta constrained to (0, 2pi] radians and increasing counter-clockwise. r is constrained to (0,1] aka a unit circle with origin (0,0).

## Sunchart
The Sunchart will plot the elevation and azumith of celestial objects. Data points are {el, az}, az starts at 0 at the top of the chart and increases clockwise to 360 degrees. el is clamped to the range (0, 90) with 0 being the horizon and 90 being straight over head. The center of the chart has coordinates (90,0) and the outer scale ring is at el = 0.

The Sunchart takes elevation-azumith data points and transforms them into polar data points. It then plots the transformed data points onto a Polar chart.