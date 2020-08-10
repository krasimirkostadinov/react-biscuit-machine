import { put, takeEvery, fork } from "redux-saga/effects";

import { messages } from "../../constants";
import { turnOffExtruder } from "./actions";

export default function* saga() {
  yield fork(watchPauseSwitch);
  yield fork(watchStopSwitch);
}

function* watchPauseSwitch() {
  yield takeEvery(messages.PAUSE, stopExtruder);
}

function* stopExtruder() {
  yield put(turnOffExtruder());
}

function* watchStopSwitch() {
  yield takeEvery(messages.TURN_OFF, stopExtruder);
}
