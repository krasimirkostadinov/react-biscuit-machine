import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import PropTypes from "prop-types";

import StamperImage from "../../images/stamper.png";
import StampedBiscuit from "../../images/stamped-biscuit.png";

function StamperComponent({ isEnginePulsation }) {
  return (
    <>
      <img src={StamperImage} alt="Stamper" />
      {isEnginePulsation && (
        <div>
          <img src={StampedBiscuit} alt="stamper biscuit" />
        </div>
      )}
    </>
  );
}

StamperComponent.prototype = {
  isEnginePulsation: PropTypes.bool.isRequired,
};

export default connect(
  createSelector(
    (s) => s.engineMachine,
    (isEnginePulsation) => ({ ...isEnginePulsation })
  )
)(StamperComponent);
