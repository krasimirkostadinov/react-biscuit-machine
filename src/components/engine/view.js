import React, { useEffect } from "react";
import BlurCircularIcon from "@material-ui/icons/WbSunny";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import { createSelector } from "reselect";

import { pulseEngine } from "./actions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignContent: "flex-start",
    alignSelf: "center",
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

  useEffect(() => {
    if (isEngineRunning && isReady) {
      const interval = setInterval(() => {
        onPulse && onPulse();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isEngineRunning, isReady, onPulse]);

  return (
    <div className={classes.root}>
      Engine working: {isEngineRunning ? "YES" : "NO"}
      <div>
        <BlurCircularIcon
          className={`${classes.motorIcon} ${
            isEngineRunning ? classes.motorRunning : classes.motorStop
          }`}
          size="large"
        />
      </div>
    </div>
  );
}

export default connect(
  createSelector(
    (s) => s.engineMachine,
    (s) => s.oven,
    (isEngineRunning, isReady) => ({ ...isEngineRunning, ...isReady })
  ),
  (dispatch) => ({
    onPulse() {
      // dispatch(pulseEngine());
      console.log("pulse dispatch");
    },
  })
)(EngineComponent);
