import { connect } from "react-redux";
import { createSelector } from "reselect";

import { addBiscuit, ovenCoolingStarted } from "./actions";
import OvenComponent from "./view";

export { default as saga } from "./saga";
export { default as reducer } from "./reducer";

export default connect(
  createSelector(
    (s) => s.oven,
    (s) => s.engineMachine,
    (oven, { isEnginePulsation }) => ({
      ...oven,
      isEnginePulsation,
    })
  ),
  (dispatch) => ({
    onAddBiscuit() {
      dispatch(addBiscuit());
    },
    onOvenCool() {
      dispatch(ovenCoolingStarted());
    },
  })
)(OvenComponent);
