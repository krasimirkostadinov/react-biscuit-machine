import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import {
  GLOBAL_ENGINE_PULSE_PERIOD,
  OVEN_COOLING_DELAY,
} from "../../constants";

const useStyles = makeStyles((theme) => ({
  oven: {
    border: "1px solid",
    width: 200,
    height: 125,
    position: "relative",
    textAlign: "center",
  },
  inner: {
    width: 160,
    height: 40,
    left: 20,
    border: "1px solid",
    bottom: 0,
    position: "absolute",
  },
  heater: {
    background: "#DDD",
    width: "70%",
    height: 4,
    border: "none",
    borderRadius: 5,
  },
  heaterHeating: {
    background: "#FF0000",
  },
  heaterHot: {
    background: "#B00D23",
  },
  heaterCold: {
    background: "#DDD",
  },
  heaterCooling: {
    background: "#00FFFF !important",
  },

  notice: {
    color: "#B00D23",
    fontSize: 10,
    animation: "blinker 1s linear infinite",
    transition: theme.transitions.create(["transform"], {
      duration: theme.transitions.duration.complex,
    }),
  },
}));

export default function OvenComponent({
  isReady,
  isHeating,
  temperature,
  isEnginePulsation,
  isCooling,
  onAddBiscuit,
  onOvenCool,
}) {
  const classes = useStyles();
  useEffect(() => {
    if (isReady && isEnginePulsation && !isCooling) {
      const interval = setInterval(() => {
        onAddBiscuit && onAddBiscuit();
      }, GLOBAL_ENGINE_PULSE_PERIOD);
      return () => clearInterval(interval);
    }
  }, [isReady, isEnginePulsation, isCooling, onAddBiscuit]);

  useEffect(() => {
    if (isReady) {
      const interval = setInterval(() => {
        onOvenCool && onOvenCool();
      }, OVEN_COOLING_DELAY);
      return () => clearInterval(interval);
    }
    return;
  }, [isReady, onOvenCool]);

  return (
    <>
      <div className={classes.oven}>
        <p>Oven</p>
        <div className={classes.inner}>
          <hr
            className={`
            ${classes.heater}            
            ${isHeating ? classes.heaterHeating : ""} 
            ${isReady ? classes.heaterHot : ""}
            ${isCooling ? classes.heaterCooling : ""}
          `}
          />
          {isHeating && <span className={classes.notice}>OVEN IS HEATING</span>}
          {temperature > 0 && !isCooling && <span>temp.:{temperature}</span>}
          {isCooling && <span>Cooling down</span>}
        </div>
      </div>
    </>
  );
}

OvenComponent.prototype = {
  isReady: PropTypes.bool.isRequired,
  isHeating: PropTypes.bool.isRequired,
  isEnginePulsation: PropTypes.bool.isRequired,
  isCooling: PropTypes.bool.isRequired,
  temperature: PropTypes.number.isRequired,
  onAddBiscuit: PropTypes.func.isRequired,
  onOvenCool: PropTypes.func.isRequired,
};
