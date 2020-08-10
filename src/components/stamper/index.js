import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";

// import { turnOnSwitch, turnOffSwitch, pauseSwitch } from "./actions";

import StamperComponent from "./view";

// export { default as reducer } from "./reducer";
export { default as saga } from "./saga";

export default connect(
  createSelector(
    (s) => s.engine,
    (isEngineRunning) => ({ ...isEngineRunning })
  )
)(StamperComponent);
