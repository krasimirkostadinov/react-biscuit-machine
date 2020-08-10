import { put, call, take, takeEvery, fork, delay } from "redux-saga/effects";

import { messages } from "../../constants";

import { turnOnStamper, turnOffStamper } from "./actions";

export default function* saga() {
  yield fork(watchExtruderIsWorking);
  yield fork(watchPauseSwitch);
  yield fork(watchStopSwitch);
}

function* watchExtruderIsWorking() {
  console.log("watchExtruderIsWorking start stamper");
  yield takeEvery(messages.EXTRUDER_ON, startStamper);
}

function* startStamper() {
  // yield delay(5000);
  console.log("start stamper");
  yield put(turnOnStamper());
}

function* watchPauseSwitch() {
  console.log("stop/pause stamper");
  yield takeEvery(messages.PAUSE, stopStamper);
}

function* stopStamper() {
  yield put(turnOffStamper());
}

function* watchStopSwitch() {
  yield takeEvery(messages.TURN_OFF, stopStamper);
}
