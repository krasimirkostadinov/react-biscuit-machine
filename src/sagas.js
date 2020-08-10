import { fork, all } from "redux-saga/effects";

import { saga as ovenSaga } from "./components/oven";
import { saga as engineSaga } from "./components/engine";
import { saga as extruderSaga } from "./components/extruder";

export function* rootSaga() {
  yield all([fork(ovenSaga), fork(engineSaga), fork(extruderSaga)]);
}
