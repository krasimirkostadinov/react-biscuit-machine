import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";

import { turnOnEngine } from "./actions";
import EngineComponent from "./view";

export { default as saga } from "./saga";
export { default as reducer } from "./reducer";

// export default connect(
//   createSelector(
//     (s) => s.engineMachine,
//     // (s) => s.oven,
//     (isEngineRunning) => ({ ...isEngineRunning })
//   )
// )(EngineComponent);
