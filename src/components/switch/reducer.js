import { messages } from "../../constants";

const switchInitialState = {
  buttonState: "off",
};

export default function switchReducer(state = switchInitialState, payload) {
  switch (payload.type) {
    case messages.TURN_ON:
      return { ...state, buttonState: "on" };
    case messages.TURN_OFF:
      return { ...state, buttonState: "off" };
    case messages.PAUSE:
      return { ...state, buttonState: "pause" };
    default:
      return state;
  }
}
