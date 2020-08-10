import { put, take, takeEvery, fork, delay } from "redux-saga/effects";

import {
  messages,
  HEATING_DELAY,
  MIN_BAKING_TEMPERATURE,
} from "../../constants";

import {
  startHeatingOven,
  turnOnOven,
  ovenCoolingStarted,
  ovenReady,
} from "./actions";

export default function* saga() {
  yield fork(watchTurnOnOven);
  yield fork(watchTurnOnMachine);
  yield fork(watchTurnOffMachine);
}

function* watchTurnOnMachine() {
  yield takeEvery(messages.TURN_ON, startOven);
}

function* watchTurnOnOven() {
  yield take(messages.OVEN_ON, startOven);
}

export function* startOven() {
  yield put(turnOnOven());
  yield put(startHeatingOven());

  yield delay(HEATING_DELAY);
  yield put(ovenReady(MIN_BAKING_TEMPERATURE));
}

function* watchTurnOffMachine() {
  yield takeEvery(messages.ENGINE_PULSE_STOP, startCoolingOven);
}

export function* startCoolingOven() {
  yield put(ovenCoolingStarted());
}
