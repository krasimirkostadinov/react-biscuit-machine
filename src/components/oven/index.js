import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";

import { turnOnOven, turnOffOven, ovenReady } from "./actions";

import OvenComponent from "./view";

export default connect(
  createSelector(
    (s) => s.oven,
    (isReady, isHeating, temperature) => ({ isReady, isHeating, temperature })
  ),
  (dispatch) => ({
    onStartOven() {
      dispatch(turnOnOven());
    },
    onTurnOffOven() {
      dispatch(turnOffOven());
    },
    onOvenReady() {
      dispatch(ovenReady());
    },
  })
)(OvenComponent);
