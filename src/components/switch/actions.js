import { messages } from "../../constants";

export function turnOnSwitch() {
  return { type: messages.TURN_ON };
}

export function turnOffSwitch() {
  return { type: messages.TURN_OFF };
}

export function pauseSwitch() {
  return { type: messages.PAUSE };
}
