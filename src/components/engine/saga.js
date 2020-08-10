import { put, call, take, takeEvery, fork, delay } from "redux-saga/effects";

import { messages } from "../../constants";

import { turnOnEngine, turnOffEngine, pulseEngine } from "./actions";

export default function* saga() {
  yield fork(watchOvenIsReady);
  yield fork(watchPauseSwitch);
  yield fork(watchStopSwitch);
  yield fork(watchPulse);
}

function* watchOvenIsReady() {
  yield takeEvery(messages.OVEN_READY, startEngine);
}

function* startEngine() {
  console.log("watchOvenIsReady start engine");
  yield put(turnOnEngine());
}

function* watchPauseSwitch() {
  console.log("stop/pause engine");
  yield takeEvery(messages.PAUSE, pauseEngine);
}

function* pauseEngine() {
  yield put(turnOffEngine());
}

function* watchStopSwitch() {
  yield takeEvery(messages.TURN_OFF, stopEngine);
}

function* stopEngine() {
    console.log('TODO stop engine if no left bisquits on belt');
  // yield put(turnOffEngine());
}

function* watchPulse(){
  yield takeEvery(messages.ENGINE_PULSE, pulsateEngine);
}

function* pulsateEngine() {
  console.log('saga pulse engine');
  yield put(pulseEngine());
}
