import { put, takeLatest, fork } from "redux-saga/effects";

import { messages } from "../../constants";

export function* changeStatusButtonSaga() {
  yield fork(watchSwitchOnButton);
  yield fork(watchSwitchOffButton);
  yield fork(watchSwitchPauseButton);
}

function* watchSwitchOnButton() {
  yield takeLatest(messages.TURN_ON, startMachine);
}

export function* startMachine() {
  console.log("machine started");
  // yield put({ type: messages.TURN_ON });
}

function* watchSwitchOffButton() {
  yield takeLatest(messages.TURN_OFF, stopMachine);
}

export function stopMachine() {
  console.log("stop machine");
  // yield put({ type: messages.TURN_OFF });
}

function* watchSwitchPauseButton() {
  yield takeLatest(messages.PAUSE, pauseMachine);
}

function* pauseMachine() {
  console.log("pause machine");
  // yield put({ type: messages.PAUSE });
}
