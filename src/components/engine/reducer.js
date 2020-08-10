import { messages } from "../../constants";

const initialState = {
  isEngineRunning: false,
  isPulsation: false,
};

export default function engineReducer(state = initialState, payload) {
  // console.log("oven reducer", payload.type);
  switch (payload.type) {
    case messages.ENGINE_START_WORKING:
      return { ...state, isEngineRunning: true };
    case messages.ENGINE_STOP_WORKING:
      return { ...state, isEngineRunning: false };
    case messages.ENGINE_PULSE:
      return { ...state, isPulsation: true };
    default:
      return state;
  }
}
