import { put, takeEvery, fork, delay, takeLatest } from "redux-saga/effects";

import { messages, GLOBAL_ENGINE_PULSE_PERIOD } from "../../constants";

import {
  turnOnEngine,
  turnOffEngine,
  pulseEngine,
  stopPulseEngine,
} from "./actions";

export default function* saga() {
  yield fork(watchOvenIsReady);
  yield fork(watchPauseSwitch);
  yield fork(watchStopSwitch);
  yield fork(watchCoolingOven);
}

function* watchOvenIsReady() {
  yield takeEvery(messages.OVEN_READY, startEngine);
}

function* startEngine() {
  yield put(turnOnEngine());
  yield delay(GLOBAL_ENGINE_PULSE_PERIOD);
  yield put(pulseEngine());
}

function* watchPauseSwitch() {
  yield takeEvery(messages.PAUSE, pauseEngine);
}

function* pauseEngine() {
  yield put(stopPulseEngine());
}

function* watchStopSwitch() {
  yield takeEvery(messages.TURN_OFF, stopEngine);
}

function* stopEngine() {
  //TODO stop engine if no more bisquits on conveyor
  yield put(turnOffEngine());
  yield put(stopPulseEngine());
}

function* watchCoolingOven() {
  yield takeLatest(messages.OVEN_COOLING, holdEngine);
}

export function* holdEngine() {
  yield put(stopPulseEngine());
}
