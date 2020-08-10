import { messages } from "../../constants";

const initialState = {
  isEngineRunning: false,
  isEnginePulsation: false,
};

export default function engineReducer(state = initialState, payload) {
  switch (payload.type) {
    case messages.ENGINE_START_WORKING:
      return { ...state, isEngineRunning: true };
    case messages.ENGINE_STOP_WORKING:
      return { ...state, isEngineRunning: false };
    case messages.ENGINE_PULSE:
      return { ...state, isEnginePulsation: true };
    case messages.ENGINE_PULSE_STOP: {
      return { ...state, isEnginePulsation: false };
    }
    default:
      return state;
  }
}
