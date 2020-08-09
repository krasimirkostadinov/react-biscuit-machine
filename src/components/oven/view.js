import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  oven: {
    border: "1px solid",
    width: 200,
    height: 80,
    position: "relative",
    textAlign: "center",

    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
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
    background: "#B00D23",
    width: "70%",
    height: 4,
    border: "none",
    borderRadius: 5,
  },
  notice: {
    color: red,
    animation: "blinker 1s linear infinite",
    "@global": {
      "@keyframes blinker": {
        "50%": { opacity: 0 },
      },
    },
  },
}));

export const MIN_BAKING_TEMPERATURE = 220;
export const MAX_BAKING_TEMPERATURE = 240;

export default function OvenComponent({
  isReady,
  isHeating,
  temperature,
  // onStartOven,
  // onTurnOffOven,
  // onOvenReady,
}) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.oven}>
        <p>Oven</p>
        {temperature > 0 && <p>temperature:{temperature}</p>}
        <div className={classes.inner}>
          <hr className={classes.heater} />
        </div>
      </div>
      {isHeating && <span className={classes.notice}>OVEN IS HEATING</span>}
    </>
  );
}
