import createSagaMiddleware from "redux-saga";
import { fork, put, all, take, takeLatest, cancelled } from "redux-saga/effects";

import { changeStatusButtonSaga } from "./components/switch/switchSaga";

export function* rootSaga() {
	yield fork(changeStatusButtonSaga);
}

// export const sagaMiddleware = createSagaMiddleware();
// sagaMiddleware.run(rootSaga);