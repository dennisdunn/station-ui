import { getUrl } from "../config";

export const killStream = async (name) => {
  const url = getUrl("api", "streams", name, "reset");
  return await fetch(url);
};