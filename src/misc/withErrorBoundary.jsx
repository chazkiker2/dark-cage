import React from "react";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false }
	}
	componentDidCatch(error, info) {
		this.setState({ hasError: true });
		console.group("componentDidCatch");
		console.error(error);
		console.info(info);
		console.group("componentDidCatch");
	}
	render() {
		if (this.state.hasError) {
			return <h1>An error has ocurred</h1>;
		}
		return this.props.children;
	}
}

const withErrBoundary = Component => props => {
	return (
		<ErrorBoundary>
			<Component  {...props} />
		</ErrorBoundary>
	);
};

export default withErrBoundary;