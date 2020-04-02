export const sdrConfig = {
  key: "main",
  label: "FM Broadcast",
  controlUrl: "",
  audioUrl: "http://localhost:8000/receiver.ogg",
  minFreq: 88,
  maxFreq: 107.9,
  modes: new Set(["fm"]),
  useGain: false,
  useSquelch: false,
  useAgc: false
};

export const sdrSettings = {
  freq: 89.9,
  mode: "fm",
  gain: 0, // auto
  squelch: 0, // off
  agc: false
};

export const stationInfo = {
  designation: "",
  lat: "",
  lon: "",
  elevation: ""
};
