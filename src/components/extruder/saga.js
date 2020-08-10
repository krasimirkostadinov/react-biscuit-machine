import { put, call, take, takeEvery, fork, delay } from "redux-saga/effects";

import { messages } from "../../constants";

import { turnOnExtruder, turnOffExtruder } from "./actions";

export default function* saga() {
  yield fork(watchEngineIsPulsating);
  yield fork(watchPauseSwitch);
  yield fork(watchStopSwitch);
}

function* watchEngineIsPulsating() {
  console.log("watchEngineIsPulsating start engine");
  yield takeEvery(messages.ENGINE_PULSE, startExtruder);
}

function* startExtruder() {
  console.log("start extruder");
  // yield put(turnOnExtruder());
}

function* watchPauseSwitch() {
  console.log("stop/pause extruder");
  yield takeEvery(messages.PAUSE, stopExtruder);
}

function* stopExtruder() {
  yield put(turnOffExtruder());
}

function* watchStopSwitch() {
  yield takeEvery(messages.TURN_OFF, stopExtruder);
}
