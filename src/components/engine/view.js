import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import PropTypes from "prop-types";

import BlurCircularIcon from "@material-ui/icons/WbSunny";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  motorIcon: {
    fontSize: "6rem",
    transition: theme.transitions.create(["transform"], {
      duration: theme.transitions.duration.complex,
    }),
  },
  motorRunning: {
    transform: "rotate(-359deg)",
    animation: "2s spinnow infinite linear",
  },
  motorStop: {
    transform: "rotate(0)",
  },
}));

function EngineComponent({
  isEngineRunning,
  isEnginePulsation,
  isReady,
  onPulse,
}) {
  const classes = useStyles();

  //TODO make pulse event
  // useEffect(() => {
  //   if (isEngineRunning && isReady) {
  //     const interval = setInterval(() => {
  //       onPulse && onPulse();
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }
  // }, []);

  return (
    <div className={classes.root}>
      <div>
        <BlurCircularIcon
          className={`${classes.motorIcon} ${
            isEngineRunning ? classes.motorRunning : classes.motorStop
          }`}
          size="large"
        />
      </div>
      <div>Engine working: {isEngineRunning ? "YES" : "NO"}</div>
      <div>Engine pulse: {isEnginePulsation ? "YES" : "NO"}</div>
    </div>
  );
}

EngineComponent.prototype = {
  isEngineRunning: PropTypes.bool.isRequired,
  isEnginePulsation: PropTypes.bool.isRequired,
  isReady: PropTypes.bool.isRequired,
  onPulse: PropTypes.func.isRequired,
};

export default connect(
  createSelector(
    (s) => s.engineMachine,
    (s) => s.oven,
    (engineMachine, isReady) => ({
      ...engineMachine,
      ...isReady,
    })
  )
)(EngineComponent);
