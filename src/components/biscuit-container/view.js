import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";

function BiscuitContainer({ readyBiscuits }) {
  return (
    <>
      <div>Total biscuits: {readyBiscuits}</div>
    </>
  );
}

export default connect(
  createSelector(
    (s) => s.oven,
    (readyBiscuits) => ({ ...readyBiscuits })
  )
)(BiscuitContainer);
