export const defaultTuner = {
  label: "",
  controlUrl: "",
  audioUrl: "",
  minFreq: 0.5,
  maxFreq: 1750,
  modes: new Set(),
  showGain: false,
  showSquelch: false,
  showAgc: false,
  presets: [],
};

export const defaultTunerState = {
  label: "",
  freq: 0.5,
  mode: "fm",
  gain: "auto", // auto
  squelch: 0, // off
  agc: false,
};

export const defaultStationInfo = {
  designation: "",
  lat: "",
  lon: "",
  elevation: "",
};

export const tuners = [
  {
    label: "FM Broadcast",
    controlUrl: "http://localhost:1882/api/sdrs",
    audioUrl: "http://localhost:8000/receiver.ogg",
    predictUrl: "http://localhost:1881/api/satellites",
    minFreq: 88,
    maxFreq: 107.9,
    modes: new Set(["fm"]),
    showGain: false,
    showSquelch: false,
    showAgc: false,
    presets: [
      { ...defaultTunerState, freq: 89.9, label: "KJTA" },
      { ...defaultTunerState, freq: 92.9, label: "KAFF" },
      { ...defaultTunerState, freq: 88.7, label: "KNAU" },
    ],
  },
  {
    label: "FM Broadcast (Adv)",
    controlUrl: "http://localhost:1882/api/sdrs",
    audioUrl: "http://localhost:8000/receiver.ogg",
    predictUrl: "http://localhost:1881/api/satellites",
    minFreq: 88,
    maxFreq: 107.9,
    modes: new Set(["fm"]),
    showGain: true,
    showSquelch: true,
    showAgc: true,
    presets: [],
  },
  {
    label: "NOAA-15",
    controlUrl: "http://localhost:1882/api/sdrs",
    audioUrl: "http://localhost:8000/receiver.ogg",
    predictUrl: "http://localhost:1881/api/satellites",
    minFreq: 137.0,
    maxFreq: 138.0,
    modes: new Set(["fm"]),
    showGain: true,
    showSquelch: true,
    showAgc: true,
    current: {
      freq: 137.62,
      mode: "fm",
      gain: "auto", // auto
      squelch: 0, // off
      agc: false,
    },
  },
  {
    label: "default",
    controlUrl: "http://localhost:1882/api/sdrs",
    audioUrl: "http://localhost:8000/receiver.ogg",
    predictUrl: "http://localhost:1881/api/satellites",
    minFreq: 0.5,
    maxFreq: 1750,
    modes: new Set(["fm"]),
    showGain: true,
    showSquelch: true,
    showAgc: true,
    current: {
      freq: 1019,
      mode: "fm",
      gain: "auto", // auto
      squelch: 0, // off
      agc: false,
    },
  },
  {
    label: "NOAA Weather Satellites",
    controlUrl: "http://localhost:1882/api/sdrs",
    audioUrl: "http://localhost:8000/receiver.ogg",
    predictUrl: "http://localhost:1881/api/satellites",
    minFreq: 137.0,
    maxFreq: 138.0,
    modes: new Set(["fm"]),
    showGain: true,
    showSquelch: true,
    showAgc: true,
    presets: [
      { ...defaultTunerState, freq: 137.62, label: "NOAA 15" },
      { ...defaultTunerState, freq: 137.9125, label: "NOAA 18" },
      { ...defaultTunerState, freq: 137.1, label: "NOAA 19" },
    ],
  },
];
