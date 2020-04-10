export const defaultTuner = {
  label: "",
  min: 0.5,
  max: 1750,
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
    label: "FM",
    min: 88,
    max: 107.9,
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
    label: "FM (Adv)",
    min: 88,
    max: 107.9,
    modes: new Set(["fm"]),
    showGain: true,
    showSquelch: true,
    showAgc: true,
    presets: [],
  },
  {
    label: "NOAA-15",
    min: 137.0,
    max: 138.0,
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
    min: 0.5,
    max: 1750,
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
    min: 137.0,
    max: 138.0,
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
