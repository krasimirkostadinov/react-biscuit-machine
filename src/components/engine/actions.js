import { messages } from "../../constants";
import { func } from "prop-types";

export function turnOnEngine() {
  return { type: messages.ENGINE_START_WORKING };
}

export function turnOffEngine() {
  return { type: messages.ENGINE_STOP_WORKING };
}

export function pulseEngine() {
  return { type: messages.ENGINE_PULSE };
}
