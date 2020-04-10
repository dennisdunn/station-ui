export const cfg = {
  // stationAddr: "black.local",
  sdr: "http://{addr}:1882/api",
  audio: "http://{addr}:8000",
  predict: "http://{addr}:1881/api",
  sdrAdmin: "http://{addr}:1882/admin/",
  audioAdmin: "http://{addr}:8000/admin/",
  predictAdmin: "http://{addr}:1881/admin/",
};

export const getUrl = (key, ...paths) => {
  const components = [
    cfg[key].replace("{addr}", cfg.stationAddr || "localhost"),
  ].concat(paths);
  return components.join("/");
};

export default cfg;
