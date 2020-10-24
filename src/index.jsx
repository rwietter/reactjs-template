import React from 'react';
import ReactDOM from 'react-dom';

import { ErrorBoundary } from './domain/Error/ErrorNoundary.jsx';
import Routes from './routes.jsx';

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
