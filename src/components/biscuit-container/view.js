import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column-reverse",
    marginBottom: "auto",
    height: 85,
  },
}));

function BiscuitContainer({ readyBiscuits }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>Total biscuits: </div>
      <div>{readyBiscuits}</div>
    </>
  );
}

BiscuitContainer.prototype = {
  readyBiscuits: PropTypes.number.isRequired,
};

export default connect(
  createSelector(
    (s) => s.oven,
    (readyBiscuits) => ({ ...readyBiscuits })
  )
)(BiscuitContainer);
