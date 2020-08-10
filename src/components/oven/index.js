import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";

import { turnOnOven, turnOffOven, ovenReady } from "./actions";
import OvenComponent from "./view";

export { default as saga } from "./saga";
export { default as reducer } from "./reducer";

export default connect(
  createSelector(
    (s) => s.oven,
    ({ isReady, isHeating, temperature }) => ({
      isReady,
      isHeating,
      temperature,
    })
  )
  // (dispatch) => ({
  //   onStartOven() {
  //     console.log("1");
  //     dispatch(turnOnOven());
  //   },
  //   onTurnOffOven() {
  //     console.log("2");
  //     dispatch(turnOffOven());
  //   },
  //   onOvenReady() {
  //     console.log("3");
  //     dispatch(ovenReady());
  //   },
  // })
)(OvenComponent);
