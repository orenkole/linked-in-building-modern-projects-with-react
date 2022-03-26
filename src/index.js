import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {configureStore} from "./store.js";
import App from "./App.js";
import {hot} from "react-hot-loader/root";

ReactDOM.render(
	<Provider store={configureStore()} >
		<App />
	</Provider>,
	document.getElementById("root")
)

export default hot(App);