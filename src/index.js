import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { persistStore } from "redux-persist";
import { PersistGate, persistGate } from "redux-persist/lib/integration/react";
import { persistedReducer } from "./store";
import App from "./App";

const Store = createStore(persistedReducer);
const persistor = persistStore(Store);

ReactDOM.render(
  <Provider store={Store}>
    <PersistGate loading={<div>loading...</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
