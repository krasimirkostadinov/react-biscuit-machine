import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";

// import { turnOnSwitch, turnOffSwitch, pauseSwitch } from "./actions";
// import SwitchComponent from "./view";
import StamperComponent from "./view";

// export { default as reducer } from "./reducer";
export { default as saga } from "./saga";

export default connect(
  null
  //   createSelector(
  //     (s) => s.switchButton,
  //     (buttonState) => ({ ...buttonState })
  //   ),
  //   (dispatch) => ({
  //     onSwitchOn() {
  //       dispatch(turnOnSwitch());
  //     },
  //     onSwitchOff() {
  //       dispatch(turnOffSwitch());
  //     },
  //     onSwitchPause() {
  //       dispatch(pauseSwitch());
  //     },
  //   })
)(StamperComponent);
