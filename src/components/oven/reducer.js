import { messages } from "../../constants";

const initialState = {
  isReady: false,
  isHeating: false,
  temperature: 0,
};

export default function ovenReducer(state = initialState, payload) {
  // console.log("oven reducer", payload.type);
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
    default:
      return state;
  }
}
