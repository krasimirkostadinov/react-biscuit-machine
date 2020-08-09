import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
// import { createSelector } from "reselect";
import PropTypes from "prop-types";

import SwitchComponent from "./switch/"; //ready
import OvenComponent from "./oven/"; //ready

import MotorComponent from "./motor";
import StamperComponent from "./stamper";
import ExtruderComponent from "./extruder";
import ConveyorComponent from "./conveyor";

export default function BiscuitMachine() {
  return (
    <>
      <ExtruderComponent />

      <StamperComponent />

      <OvenComponent />

      <ConveyorComponent />

      <MotorComponent />

      <SwitchComponent />
    </>
  );
}

// export default connect(
//   (state) => state.application,
//   (dispatch) => ({
//     onClickComponent(data) {
//       // dispatch(clickComponent());
//     },
//   })
// )(BiscuitMachine);
