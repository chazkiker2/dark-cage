import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { ThemeContextProvider } from "./theme/ThemeContext";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<ThemeContextProvider>
			{/* <Provider store={store}> */}
			<Router>
				<App />
			</Router>
			{/* </Provider> */}
		</ThemeContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
