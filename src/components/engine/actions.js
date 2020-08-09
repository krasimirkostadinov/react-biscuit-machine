import { messages } from "../../constants";

export function turnOnEngine() {
  return { type: messages.ENGINE_START_WORKING };
}

export function turnOffEngine() {
  return { type: messages.ENGINE_STOP_WORKING };
}
