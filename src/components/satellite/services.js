export const toProperCase = (s) => {
  return s.toLowerCase().replace(/^(.)|\s(.)/g, function ($1) {
    return $1.toUpperCase();
  });
};

export const toLabel = (str) => {
  return str
    .split(/(?=[A-Z])/)
    .map(toProperCase)
    .join(" ");
};

export const valueFormatters = {
  nextEvent: (x) =>
    new Date(x)
      .toISOString()
      .replace("T", " ")
      .replace(".000", "")
      .replace("Z", " UTC"),
  deltat: (x) => {
    if (x < 0) return "00:00:00";
    const delta = new Date(x);
    return `${delta
      .getUTCHours()
      .toString()
      .padStart(2, "0")}:${delta
      .getUTCMinutes()
      .toString()
      .padStart(2, "0")}:${delta.getUTCSeconds().toString().padStart(2, "0")}`;
  },
};

export const format = (data, formatters = valueFormatters) => {
  const formatted = {};
  Object.keys(data).forEach((k) => {
    const key = toLabel(k);
    const value = formatters[k] ? formatters[k](data[k]) : data[k];
    formatted[key] = value;
  });
  return formatted;
};
