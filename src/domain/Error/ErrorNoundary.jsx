import PropTypes from 'prop-types';

import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: ``, info: `` };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		this.setState({ hasError: true, error, info });
	}

	render() {
		const { children, render } = this.props;
		const { hasError, error, info } = this.state;
		if (hasError) {
			return (
				<div
					style={{
						width: `100%`,
						height: `100vh`,
						display: `flex`,
						placeContent: `center`,
						alignItems: `center`
					}}>
					{render(error, info)}
				</div>
			);
		}
		return children;
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.none),
	]).isRequired,
	render: PropTypes.func.isRequired,
};

export { ErrorBoundary };
