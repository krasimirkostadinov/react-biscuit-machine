import React, { useCallback } from "react";

import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";

export default function SwitchComponent({
  buttonState,
  onSwitchOn,
  onSwitchOff,
  onSwitchPause,
}) {
  console.log("SWITCH re-render");
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Switch</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch checked={buttonState === "off"} onChange={onSwitchOff} />
          }
          label="Off"
        />
        <FormControlLabel
          control={
            <Switch checked={buttonState === "on"} onChange={onSwitchOn} />
          }
          label="On"
        />
        <FormControlLabel
          control={
            <Switch
              checked={buttonState === "pause"}
              onChange={onSwitchPause}
            />
          }
          label="Pause"
        />
      </FormGroup>
      <FormHelperText>Switching on will turn on the oven</FormHelperText>
    </FormControl>
  );
}
