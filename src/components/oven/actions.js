import { messages } from "../../constants";

export function turnOnOven() {
  return { type: messages.OVEN_ON };
}

export function turnOffOven() {
  return { type: messages.OVEN_OFF };
}

export function startHeatingOven() {
  return { type: messages.OVEN_START_HEATING };
}

export function ovenReady(temperature) {
  console.log("temperature", temperature);
  return { type: messages.OVEN_READY, data: temperature };
}
