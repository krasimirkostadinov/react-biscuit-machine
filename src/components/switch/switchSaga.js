import { put, takeEvery, fork } from "redux-saga/effects";

import { messages } from "../../constants";

import { turnOnSwitch, turnOffSwitch, pauseSwitch } from "./actions";

// export function* changeStatusButtonSaga() {
//   yield fork(watchSwitchOnButton);
//   yield fork(watchSwitchOffButton);
//   yield fork(watchSwitchPauseButton);
// }

// function* watchSwitchOnButton() {
//   yield takeEvery(messages.TURN_ON, startMachine);
// }

// export function* startMachine() {
//   console.log("switch on");
//   // yield put(turnOnSwitch());
// }

// function* watchSwitchOffButton() {
//   yield takeEvery(messages.TURN_OFF, stopMachine);
// }

// export function* stopMachine() {
//   console.log("stop switch");
//   // yield put(turnOffSwitch());
// }

// function* watchSwitchPauseButton() {
//   yield takeEvery(messages.PAUSE, pauseMachine);
// }

// function* pauseMachine() {
//   console.log("pause switch");
//   // yield put(pauseSwitch);
// }
