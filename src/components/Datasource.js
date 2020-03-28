import axios from "axios";
import { useEffect } from "react";

export const Datasource = ({ url, onData, children }) => {
  useEffect(() => {
    async function fetchdata() {
      const result = await axios(url);
      onData(result.data);
    }
    const valid = !url.endsWith("/") && url.lastIndexOf("//") === 5;
    if (valid) {
      fetchdata();
    } else {
      onData(undefined);
    }
  }, [onData, url]);

  return children || null;
};
