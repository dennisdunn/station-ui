import axios from "axios";

export const callApi = (options, onData) => {
  async function fetchdata() {
    const { data } = await axios(options);
    callback(data);
  }

  const callback = data => {
    if (typeof (onData) === 'function') onData(data);
  }

  const valid =
    !options.url.endsWith("/") && options.url.lastIndexOf("//") === 5;
  if (valid) {
    fetchdata();
  } else {
    callback(undefined)
  }
};

// sdr settings

export const saveSdrSettings = (data) => {
  callApi({ url: "http://localhost:1882/api/sdrs/main", method: "POST", data });
};
