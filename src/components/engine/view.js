import React, { useEffect } from "react";
import BlurCircularIcon from "@material-ui/icons/WbSunny";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  motorIcon: {
    "-webkitAnimation": "spin 4s linear infinite",
    "-mozAanimation": "spin 4s linear infinite",
    animation: "spin 4s linear infinite",
    fontSize: "6rem",
    left: 50,
    position: "relative",
  },
}));

export default function EngineComponent({ isEngineRunning, onStartEngine }) {
  const classes = useStyles();
  console.log("isEngineRunning", isEngineRunning);

  // useEffect(() => {
  //   onStartEngine && onStartEngine();
  // }, [isEngineRunning]);
  return (
    <>
      Engine working: {isEngineRunning ? "YES" : "NO"}
      <BlurCircularIcon className={classes.motorIcon} size="large" />
    </>
  );
}
