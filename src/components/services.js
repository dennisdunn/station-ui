import axios from "axios";

export const callApi = (url, onData) => {
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
};
