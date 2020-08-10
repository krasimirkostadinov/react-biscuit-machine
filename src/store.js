import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import { rootSaga } from "./sagas";

const _reduxToolsPresent = () =>
  typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === "function";
const _isDevelopment = () => process.env.NODE_ENV === "development";

export const sagaMiddleware = createSagaMiddleware();

// Enable use of Redux devtools in development
const composeEnhancer =
  _isDevelopment() && _reduxToolsPresent()
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
