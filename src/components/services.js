import { MenuItem } from "@material-ui/core";
import axios from "axios";
import React from "react";

// network helpers

export const callApi = (options, onData) => {
  async function fetchdata() {
    const { data } = await axios(options);
    callback(data);
  }

  const callback = (data) => {
    if (typeof onData === "function") onData(data);
  };

  const valid =
    !options.url.endsWith("/") && options.url.lastIndexOf("//") === 5;
  if (valid) {
    fetchdata();
  } else {
    callback(undefined);
  }
};

export const saveSdrSettings = (data) => {
  callApi({ url: "http://localhost:1882/api/sdrs/main", method: "POST", data });
};

// control helpers

// make menu items from key-value pairs.
export const mkMenuItems = (kvps) => {
  return kvps.map((kvp, i) => (
    <MenuItem key={i} value={kvp.value}>
      {kvp.key}
    </MenuItem>
  ));
};
