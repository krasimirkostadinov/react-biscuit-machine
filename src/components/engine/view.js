import React from "react";
import BlurCircularIcon from "@material-ui/icons/WbSunny";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import { createSelector } from "reselect";

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

function EngineComponent({ isEngineRunning, isReady, onPulse }) {
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
    </div>
  );
}

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
