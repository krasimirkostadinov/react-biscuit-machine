import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";

import { turnOnSwitch, turnOffSwitch, pauseSwitch } from "./actions";
import SwitchComponent from "./view";

export { default as reducer } from "./reducer";

export default connect(
  createSelector(
    (s) => s.switchButton,
    (buttonState) => ({ ...buttonState })
  ),
  (dispatch) => ({
    onSwitchOn() {
      dispatch(turnOnSwitch());
    },
    onSwitchOff() {
      dispatch(turnOffSwitch());
    },
    onSwitchPause() {
      console.log("on pause");
      dispatch(pauseSwitch());
    },
  })
)(SwitchComponent);
