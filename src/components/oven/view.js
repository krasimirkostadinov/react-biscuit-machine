import React from "react";

export default function OvenComponent({
  isReady,
  isHeating,
  temperature,
  onStartOven,
  onTurnOffOven,
  onOvenReady,
}) {
  return (
    <div>
      isReady: {isReady}
      isHeating: {isHeating}
      temperature: {temperature}
    </div>
  );
}
