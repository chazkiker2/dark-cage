import React from "react";
import withErrorBoundary from "./withErrorBoundary";

// @withErrorBoundary
const BuggyComponent = props => {
	const simulateErr = () => {
		throw new Error("Sample Error");
	}

	return (
		<div>
			<h1 onClick={simulateErr}>Make Error</h1>
		</div>
	);
}

export default withErrorBoundary(BuggyComponent);