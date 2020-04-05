export const tunerDefs = [{
  label: "FM Broadcast",
  controlUrl: "",
  audioUrl: "http://localhost:8000/receiver.ogg",
  minFreq: 88,
  maxFreq: 107.9,
  modes: new Set(["fm"]),
  showGain: false,
  showSquelch: false,
  showAgc: false,
},{
  label: "FM Broadcast (Adv)",
  controlUrl: "",
  audioUrl: "http://localhost:8000/receiver.ogg",
  minFreq: 88,
  maxFreq: 107.9,
  modes: new Set(["fm"]),
  showGain: true,
  showSquelch: true,
  showAgc: true,
}];

export const defaultTunerDefinition ={
  label: "",
  controlUrl: "",
  audioUrl: "",
  minFreq: 0.5,
  maxFreq: 1750,
  modes: new Set(["fm","am","lsb","usb"]),
  showGain: false,
  showSquelch: false,
  showAgc: false,
}

export const station = {
  label: "KJTA",
  freq: 89.9,
  mode: "fm",
  gain: "auto", // auto
  squelch: 0, // off
  agc: false,
};

export const presets = {
  label: "Flagstaff Favorites",
  stations: [
    station,
    { ...station, freq: 92.9, label: "KAFF" },
    { ...station, freq: 88.7, label: "KNAU" },
  ],
};

export const stationInfo = {
  designation: "",
  lat: "",
  lon: "",
  elevation: "",
};
