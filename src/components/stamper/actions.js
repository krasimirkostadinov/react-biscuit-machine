import { messages } from "../../constants";

export function turnOnStamper() {
  return { type: messages.STAMPER_ON };
}

export function turnOffStamper() {
  return { type: messages.STAMPER_OFF };
}
