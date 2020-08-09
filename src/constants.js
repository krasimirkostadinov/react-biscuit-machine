export const userActions = objKeyMap([
  "TURN_ON",
  "TURN_OFF",
  "PAUSE",
  "OVEN_ON",
  "OVEN_OFF",
  "OVEN_READY",
  "OVEN_START_HEATING",
  "ENGINE_START_WORKING",
  "ENGINE_STOP_WORKING",
  "EXTRUDER_ON",
  "EXTRUDER_OFF",
  "STAMPER_ON",
  "STAMPER_OFF",
]);

export const messages = {
  ...userActions,
};

function objKeyMap(arr, f) {
  return Object.freeze(
    Object.create(
      null,
      arr.reduce(
        (acc, key) => (
          (acc[f ? f(key) : key] = {
            value: key,
            enumerable: true,
          }),
          acc
        ),
        {}
      )
    )
  );
}
