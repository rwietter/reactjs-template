import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Home from './components/App/App.jsx';

const Home = lazy(() => import(`./components/App/App.jsx`));

const Routes = () => {
	return (
		<Router>
			<Suspense fallback={<h1>Loading...</h1>}>
				<Switch>
					<Route exact component={Home} path="/" />
				</Switch>
			</Suspense>
		</Router>
	);
};

export default Routes;
