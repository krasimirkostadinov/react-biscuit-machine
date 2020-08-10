import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderStyle: "dashed",
    width: "90%",
    margin: "auto",
    borderWidth: 2,
  },
  conveyor: {
    height: 5,
    background: "#000",
    borderRadius: 5,
    animation: "border-dance 4s infinite linear",
    transition: theme.transitions.create(["transform"], {
      duration: theme.transitions.duration.complex,
    }),
    margin: 2,
  },
}));

const ConveyorComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <hr className={classes.conveyor} />
    </div>
  );
};

export default ConveyorComponent;
