import { messages } from "../../constants";

const initialState = {
  isEngineRunning: false,
};

export default function engineReducer(state = initialState, payload) {
  // console.log("oven reducer", payload.type);
  switch (payload.type) {
    case messages.ENGINE_START_WORKING:
      return { ...state, isEngineRunning: true };
    case messages.ENGINE_STOP_WORKING:
      return { ...state, isEngineRunning: false };
    default:
      return state;
  }
}
