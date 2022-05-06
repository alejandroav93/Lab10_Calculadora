import React from "react";
import ReactDOM from "react-dom";

import StartApp from "./components/startApp.js"
import TodoApp from "./components/stateComponents/todoApp.js"
import TodoAppHooks from "./components/stateComponents/todoAppHooks.js"
import Board from "./components/game.js"
import "./index.css"
ReactDOM.render(
  <TodoApp/>,
  document.getElementById("root")
);
