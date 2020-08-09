import { messages } from "../../constants";

export function turnOnExtruder() {
  return { type: messages.EXTRUDER_ON };
}

export function turnOffExtruder() {
  return { type: messages.EXTRUDER_OFF };
}
