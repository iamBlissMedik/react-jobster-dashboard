import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "normalize.css"; //must be before index.css
import "./assets/css/index.css";
import { Provider } from "react-redux";
import { store } from "./features/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
