import axios from "axios";

export const callApi = (options, onData) => {
  async function fetchdata() {
    const { data } = await axios(options);
    onData(data);
  }

  const valid =
    !options.url.endsWith("/") && options.url.lastIndexOf("//") === 5;
  if (valid) {
    fetchdata();
  } else {
    onData(undefined);
  }
};

// sdr settings

export const saveSdrSettings = (data) => {
  console.log(data);
  callApi({ url: "http://localhost:1882/api/sdrs/main", method: "POST", data });
};
