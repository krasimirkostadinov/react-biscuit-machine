import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  oven: {
    border: "1px solid",
    width: 200,
    height: 100,
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
  onAddBiscuit,
}) {
  const classes = useStyles();

  useEffect(() => {
    if (isReady && isEnginePulsation) {
      const interval = setInterval(() => {
        onAddBiscuit && onAddBiscuit();
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isReady, isEnginePulsation, onAddBiscuit]);

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
          `}
          />
          {isHeating && <span className={classes.notice}>OVEN IS HEATING</span>}
          {temperature > 0 && <span>temp.:{temperature}</span>}
        </div>
      </div>
    </>
  );
}
