import React from "react";
import PropTypes from "prop-types";

import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";

const SWITCH_OFF = "off";
const SWITCH_ON = "on";
const SWITCH_PAUSE = "pause";

export default function SwitchComponent({
  buttonState,
  onSwitchOn,
  onSwitchOff,
  onSwitchPause,
}) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Switch</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={buttonState === SWITCH_OFF}
              disabled={buttonState === SWITCH_OFF}
              onChange={onSwitchOff}
            />
          }
          label="Off"
        />
        <FormControlLabel
          control={
            <Switch checked={buttonState === SWITCH_ON} onChange={onSwitchOn} />
          }
          label="On"
        />
        <FormControlLabel
          control={
            <Switch
              disabled={buttonState === SWITCH_PAUSE || buttonState === SWITCH_OFF}
              checked={buttonState === SWITCH_PAUSE}
              onChange={onSwitchPause}
            />
          }
          label="Pause"
        />
      </FormGroup>
      <FormHelperText>"ON" will turn on the oven</FormHelperText>
    </FormControl>
  );
}

SwitchComponent.prototype = {
  buttonState: PropTypes.string.isRequired,
  onSwitchOn: PropTypes.func.isRequired,
  onSwitchOff: PropTypes.func.isRequired,
  onSwitchPause: PropTypes.func.isRequired,
};
