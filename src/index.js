import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./app";
import store from "./store";
// import { sagaMiddleware, rootSaga } from "./sagas";

import * as serviceWorker from "./serviceWorker";

//TODO add .css

// sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your Application to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
