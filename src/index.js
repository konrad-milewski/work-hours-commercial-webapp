import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import React from "react";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import  './styles/main.scss'
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
