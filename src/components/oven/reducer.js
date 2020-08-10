import { messages } from "../../constants";

const initialState = {
  isReady: false,
  isHeating: false,
  isCooling: false,
  temperature: 0,
  readyBiscuits: 0,
};

export default function ovenReducer(state = initialState, payload) {
  switch (payload.type) {
    case messages.OVEN_ON:
      return { ...state, isHeating: true };
    case messages.OVEN_OFF:
      return { ...state, isReady: false, isHeating: false };
    case messages.OVEN_READY:
      return {
        ...state,
        isReady: true,
        temperature: payload.data,
        isHeating: false,
      };
    case messages.READY_BISCUIT:
      return { ...state, readyBiscuits: ++state.readyBiscuits };
    case messages.OVEN_COOLING:
      return { ...state, isCooling: true };
    default:
      return state;
  }
}
