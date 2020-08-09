import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";

import { turnOnEngine } from "./actions";
import EngineComponent from "./view";

export { default as saga } from "./saga";
export { default as reducer } from "./reducer";

export default connect(
  createSelector(
    (s) => s.engine,
    ({ isEngineRunning }) => ({
      isEngineRunning,
    })
  ),
  (dispatch) => ({
    onStartEngine() {
      console.log("1");
      dispatch(turnOnEngine());
    },
    //   onTurnOffOven() {
    //     console.log("2");
    //     dispatch(turnOffOven());
    //   },
    //   onOvenReady() {
    //     console.log("3");
    //     dispatch(ovenReady());
    //   },
  })
)(EngineComponent);
