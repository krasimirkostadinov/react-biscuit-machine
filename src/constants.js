export const GLOBAL_ENGINE_PULSE_PERIOD = 2000; //2sec
export const OVEN_HEATING_DELAY = 5000; //5sec
export const OVEN_COOLING_DELAY = 20000; //10sec
export const MIN_BAKING_TEMPERATURE = 220;
export const MAX_BAKING_TEMPERATURE = 240;

const uiActions = {
  TURN_ON: "TURN_ON",
  TURN_OFF: "TURN_OFF",
  PAUSE: "PAUSE",
  OVEN_ON: "OVEN_ON",
  OVEN_OFF: "OVEN_OFF",
  OVEN_READY: "OVEN_READY",
  OVEN_START_HEATING: "OVEN_START_HEATING",
  OVEN_COOLING: "OVEN_COOLING",
  OVEN_REHEATING: "OVEN_REHEATING",
  ENGINE_START_WORKING: "ENGINE_START_WORKING",
  ENGINE_STOP_WORKING: "ENGINE_STOP_WORKING",
  ENGINE_PULSE: "ENGINE_PULSE",
  ENGINE_PULSE_STOP: "ENGINE_PULSE_STOP",
  EXTRUDER_ON: "EXTRUDER_ON",
  EXTRUDER_OFF: "EXTRUDER_OFF",
  STAMPER_ON: "STAMPER_ON",
  STAMPER_OFF: "STAMPER_OFF",
  READY_BISCUIT: "READY_BISCUIT",
};

export const messages = {
  ...Object.freeze(uiActions),
};
