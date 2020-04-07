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

export const format = (data, formatters = {}) => {
  const formatted = {};
  Object.keys(data).forEach((k) => {
    const key = toLabel(k);
    const value = formatters[k] ? formatters[k](data[k]) : data[k];
    formatted[key] = value;
  });
  return formatted;
};
