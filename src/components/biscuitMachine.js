import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import SwitchComponent from "./switch/";
import OvenComponent from "./oven/";

import EngineComponent from "./engine/view";
import StamperComponent from "./stamper";
import ExtruderComponent from "./extruder";
import ConveyorComponent from "./conveyor";
import BiscuitContainer from "./biscuit-container/view";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    border: "1px solid",
  },
  conveyor: {
    height: 50,
    padding: 0,
  },
}));

export default function BiscuitMachine() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>The biscuit machine</h1>
      <Grid container>
        <Grid item xs={3}>
          <ExtruderComponent />
        </Grid>

        <Grid item xs={3}>
          <StamperComponent />
        </Grid>

        <Grid item xs={3}>
          <OvenComponent />
        </Grid>

        <Grid item xs={3}>
          <BiscuitContainer />
        </Grid>

        <Grid item xs={12} className={classes.conveyor}>
          <ConveyorComponent />
        </Grid>

        <Grid item xs={8}>
          <EngineComponent />
        </Grid>
        <Grid item xs={4}>
          <SwitchComponent />
        </Grid>
      </Grid>
    </div>
  );
}
