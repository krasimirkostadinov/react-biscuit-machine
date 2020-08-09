import createSagaMiddleware from "redux-saga";
import {
  fork,
  put,
  all,
  take,
  takeLatest,
  cancelled,
} from "redux-saga/effects";

// import { changeStatusButtonSaga } from "./components/switch/switchSaga";
import { saga as ovenSaga } from "./components/oven";
import { saga as engineSaga } from "./components/engine";
import { saga as extruderSaga } from "./components/extruder";
import { saga as stamperSaga } from "./components/stamper";

export function* rootSaga() {
  // yield fork(changeStatusButtonSaga);
  yield fork(ovenSaga);
  yield fork(engineSaga);
  yield fork(extruderSaga);
  yield fork(stamperSaga);
}

// export const sagaMiddleware = createSagaMiddleware();
// sagaMiddleware.run(rootSaga);
