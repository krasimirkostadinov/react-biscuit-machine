import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import SwitchComponent from "./switch/"; //ready
import OvenComponent from "./oven/"; //ready

import EngineComponent from "./engine/view";
import StamperComponent from "./stamper/view";
import ExtruderComponent from "./extruder/view";
import ConveyorComponent from "./conveyor";

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

// export default connect(
//   (state) => state.application,
//   (dispatch) => ({
//     onClickComponent(data) {
//       // dispatch(clickComponent());
//     },
//   })
// )(BiscuitMachine);
