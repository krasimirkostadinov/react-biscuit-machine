export const userActions = objKeyMap([
  "TURN_ON",
  "TURN_OFF",
  "PAUSE",
  "OVEN_ON",
  "OVEN_OFF",
  "OVEN_READY",
  "OVEN_START_HEATING",
  "OVEN_COOLING",
  "ENGINE_START_WORKING",
  "ENGINE_STOP_WORKING",
  "ENGINE_PULSE",
  "ENGINE_PULSE_STOP",
  "EXTRUDER_ON",
  "EXTRUDER_OFF",
  "STAMPER_ON",
  "STAMPER_OFF",
  "READY_BISCUIT",
]);

export const messages = {
  ...userActions,
};

function objKeyMap(array, f) {
  return Object.freeze(
    Object.create(
      null,
      array.reduce(
        (accum, key) => (
          (accum[f ? f(key) : key] = {
            value: key,
            enumerable: true,
          }),
          accum
        ),
        {}
      )
    )
  );
}

export const GLOBAL_ENGINE_PULSE_PERIOD = 2000;
export const HEATING_DELAY = 3000;
export const MIN_BAKING_TEMPERATURE = 220;
export const MAX_BAKING_TEMPERATURE = 240;
