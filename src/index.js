import React from "react";
import ReactDOM from "react-dom";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/lib/integration/react";
import {Provider} from "react-redux";
import {configureStore} from "./store.js";
import App from "./App.js";
import {hot} from "react-hot-loader/root";

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
	<Provider store={store} >
		<PersistGate
			persistor={persistor }
			loading={<div>Loading...</div>}
		>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById("root")
)

export default hot(App);