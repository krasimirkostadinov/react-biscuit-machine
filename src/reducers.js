import { combineReducers } from "redux";

import { reducer as switchReducer } from "./components/switch/";
import { reducer as ovenReducer } from "./components/oven";
import { reducer as engineReducer } from "./components/engine";

export default combineReducers({
  switchButton: switchReducer,
  oven: ovenReducer,
  engineMachine: engineReducer,
});
