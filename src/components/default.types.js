export const defaultTuner = {
  label: "",
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
