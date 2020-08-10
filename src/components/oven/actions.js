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
  return { type: messages.OVEN_READY, data: temperature };
}

export function addBiscuit() {
  return { type: messages.READY_BISCUIT };
}

export function ovenCoolingStarted() {
  return { type: messages.OVEN_COOLING };
}
