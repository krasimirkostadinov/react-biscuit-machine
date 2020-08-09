import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";

// import { turnOnEngine } from "./actions";
import ExtruderComponent from "./view";

export { default as saga } from "./saga";
// export { default as reducer } from "./reducer";

export default connect(
  null
  //   createSelector(
  //     (s) => s.engine,
  //     ({ isEngineRunning }) => ({
  //       isEngineRunning,
  //     })
  //   ),
  //   (dispatch) => ({
  //   })
)(ExtruderComponent);
