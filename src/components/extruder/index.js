import { connect } from "react-redux";
import { createSelector } from "reselect";

import ExtruderComponent from "./view";

export { default as saga } from "./saga";

export default connect(
  createSelector(
    (s) => s.engineMachine,
    (isEnginePulsation) => ({ ...isEnginePulsation })
  )
)(ExtruderComponent);
