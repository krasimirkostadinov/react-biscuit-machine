import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";

import StamperImage from "../../images/stamper.png";
import StampedBiscuit from "../../images/stamped-biscuit.png";

function StamperComponent({ isEnginePulsation }) {
  return (
    <>
      <img src={StamperImage} alt="Stamper" />
      {isEnginePulsation && (
        <div>
          <img src={StampedBiscuit} alt="stamper biscuit" />
          pulse
        </div>
      )}
    </>
  );
}

export default connect(
  createSelector(
    (s) => s.engineMachine,
    (isEnginePulsation) => ({ ...isEnginePulsation })
  )
)(StamperComponent);
