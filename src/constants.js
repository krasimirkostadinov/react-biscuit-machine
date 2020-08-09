export const uiActions = keyMap([
  "TURN_ON",
  "TURN_OFF",
  "PAUSE",
  "OVEN_ON",
  "OVEN_OFF",
  "OVEN_READY",
]);

export const messages = {
  ...uiActions,
};

function keyMap(arr, f) {
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
