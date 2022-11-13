import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "./store/modules";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = createStore(rootReducer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
