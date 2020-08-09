import { combineReducers } from "redux";

import appReducer from "./app";
import { switchReducer } from "./components/switch/switchReducer";

export default combineReducers({
  // application: appReducer,
  switchButton: switchReducer,
});
