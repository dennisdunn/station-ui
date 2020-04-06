export const tunerDefs = [
  {
    label: "FM Broadcast",
    controlUrl: "http://localhost:1882/api/sdrs",
    audioUrl: "http://localhost:8000/receiver.ogg",
    minFreq: 88,
    maxFreq: 107.9,
    modes: new Set(["fm"]),
    showGain: false,
    showSquelch: false,
    showAgc: false,
    preset:'Flagstaff Favorites'
  },
  {
    label: "FM Broadcast (Adv)",
    controlUrl: "http://localhost:1882/api/sdrs",
    audioUrl: "http://localhost:8000/receiver.ogg",
    minFreq: 88,
    maxFreq: 107.9,
    modes: new Set(["fm"]),
    showGain: true,
    showSquelch: true,
    showAgc: true,
    preset:'Flagstaff Favorites'
  },
  {
    label: "NOAA Weather Satellites",
    controlUrl: "http://localhost:1882/api/sdrs",
    audioUrl: "http://localhost:8000/receiver.ogg",
    minFreq: 137.0,
    maxFreq: 138.0,
    modes: new Set(["fm"]),
    showGain: true,
    showSquelch: true,
    showAgc: true,
    preset:'NOAA Weather'
  },
];

export const defaultTunerDefinition = {
  label: "",
  controlUrl: "",
  audioUrl: "",
  minFreq: 0.5,
  maxFreq: 1750,
  modes: new Set(),
  showGain: false,
  showSquelch: false,
  showAgc: false,
};

export const station = {
  label: "KJTA",
  freq: 89.9,
  mode: "fm",
  gain: "auto", // auto
  squelch: 0, // off
  agc: false,
};

export const presets = [
  {
    label: "Flagstaff Favorites",
    stations: [
      station,
      { ...station, freq: 92.9, label: "KAFF" },
      { ...station, freq: 88.7, label: "KNAU" },
    ],
  },
  {
    label: "NOAA Weather",
    stations: [
      { ...station, freq: 137.62, label: "NOAA 15" },
      { ...station, freq: 137.9125, label: "NOAA 18" },
      { ...station, freq: 137.1, label: "NOAA 19" },
    ],
  },
];

export const stationInfo = {
  designation: "",
  lat: "",
  lon: "",
  elevation: "",
};
