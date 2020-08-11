import {
  put,
  take,
  takeEvery,
  takeLatest,
  fork,
  delay,
} from "redux-saga/effects";

import {
  messages,
  OVEN_HEATING_DELAY,
  MIN_BAKING_TEMPERATURE,
} from "../../constants";

import {
  startHeatingOven,
  turnOnOven,
  ovenCoolingStarted,
  ovenReady,
  turnOffOven,
} from "./actions";

export default function* saga() {
  yield fork(watchTurnOnOven);
  yield fork(watchTurnOnMachine);
  yield fork(watchTurnOffMachine);
  yield fork(watchCoolingOven);
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

  yield delay(OVEN_HEATING_DELAY);
  yield put(ovenReady(MIN_BAKING_TEMPERATURE));
}

function* watchTurnOffMachine() {
  yield takeEvery(messages.ENGINE_STOP_WORKING, startCoolingOven);
  yield takeEvery(messages.TURN_OFF, stopOven);
}

export function* stopOven() {
  yield put(turnOffOven());
}

export function* startCoolingOven() {
  yield put(ovenCoolingStarted());
}

function* watchCoolingOven() {
  yield takeLatest(messages.OVEN_COOLING, startHeatingWithDelay);
}

export function* startHeatingWithDelay() {
  yield delay(OVEN_HEATING_DELAY);
  yield put(startHeatingOven());

  yield delay(OVEN_HEATING_DELAY);
  yield put(ovenReady(MIN_BAKING_TEMPERATURE));
}
