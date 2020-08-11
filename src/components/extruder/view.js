import React from "react";
import PropTypes from "prop-types";

import ExtruderImage from "../../images/extruder.png";
import ExtrudedBisquit from "../../images/extruded-biscuit.png";

export default function ExtruderComponent({ isEnginePulsation }) {
  return (
    <>
      <img src={ExtruderImage} alt="Extruder" />
      {isEnginePulsation && (
        <div>
          <img src={ExtrudedBisquit} alt="Extruder biscuit" />
        </div>
      )}
    </>
  );
}

ExtruderComponent.prototype = {
  isEnginePulsation: PropTypes.bool.isRequired,
};
