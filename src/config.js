export const cfg = {
 // host: "black.local",
  stream: "http://{addr}:8000",
  api: "http://{addr}:1880/api",
  apiAdmin: "http://{addr}:1880/admin/",
  streamAdmin: "http://{addr}:8000/admin/",
};

export const getUrl = (key, ...paths) => {
  const components = [
    cfg[key].replace("{addr}", cfg.host || "localhost"),
  ].concat(paths);
  return components.join("/");
};

export default cfg;
