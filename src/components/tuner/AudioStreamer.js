import React from "react";

export const AudioStreamer = ({ enabled, source }) => {
  return enabled ? <audio src={source} autoPlay /> : null;
};
