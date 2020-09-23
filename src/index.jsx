import React from 'react';
import ReactDOM from 'react-dom';

import { ErrorBoundary } from './domain/Error/ErrorNoundary.jsx';
import Routes from './routes.jsx';
import * as serviceWorker from './serviceWorker.js';

ReactDOM.render(
	<React.StrictMode>
		<ErrorBoundary
			render={() => <h1>Oooh Nooo! An error occurred to the open app.</h1>}
		>
			<Routes />
		</ErrorBoundary>
	</React.StrictMode>,
	document.getElementById(`root`)
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
