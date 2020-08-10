import { put, call, take, takeEvery, fork, delay } from "redux-saga/effects";

import { messages, HEATING_DELAY } from "../../constants";

import {
  startHeatingOven,
  turnOnOven,
  turnOffOven,
  ovenReady,
} from "./actions";

import { MIN_BAKING_TEMPERATURE, MAX_BAKING_TEMPERATURE } from "./view";


export default function* saga() {
  yield fork(watchTurnOnOven);
  yield fork(watchTurnOnMachine);
}

function* watchTurnOnMachine() {
  yield takeEvery(messages.TURN_ON, startOven);
}

function* watchTurnOnOven() {
  yield take(messages.OVEN_ON, startOven);
}

export function* startOven() {
  console.log("turn ON OVEN");
  yield put(turnOnOven());
  yield put(startHeatingOven());
  console.log("start heating");

  yield delay(HEATING_DELAY);
  yield put(ovenReady(MIN_BAKING_TEMPERATURE));
  console.log("oven ready");
}
