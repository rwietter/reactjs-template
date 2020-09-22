import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/App/App.jsx';

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact render={Home} path="/" />
				<Route exact render={Home} path="/login" />
				<Route exact render={Home} path="/register" />
			</Switch>
		</Router>
	);
};

export default Routes;
