import {hot} from "react-hot-loader";
import React from "react";
import TodoList from "./todos/TodoList.js";

import "./App.css"

const App = () => (
	<TodoList />
)

export default hot(module)(App);