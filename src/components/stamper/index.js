import { connect } from "react-redux";
import { createSelector } from "reselect";

import StamperComponent from "./view";

export default connect(
  createSelector(
    (s) => s.engineMachine,
    (isEngineRunning) => ({ ...isEngineRunning })
  )
)(StamperComponent);
