import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store/config";
import { tempsetuser, check } from "./modules/slices/user";

const root = ReactDOM.createRoot(document.getElementById("root"));
function loadUser() {
  try {
    const user = localStorage.getItem("user");

    if (!user) return;

    store.dispatch(tempsetuser(JSON.parse(user)));
    store.dispatch(check());
  } catch (e) {
    console.log("local starge is not working");
  }
}
loadUser();
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
