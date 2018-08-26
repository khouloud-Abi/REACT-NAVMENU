import React from "react";
import ReactDOM from "react-dom";
import Main from "./App.js";
import { BrowserRouter, Link, Route } from "react-router-dom";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  rootElement
);
