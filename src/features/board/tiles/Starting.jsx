import React from "react";
import styled from "styled-components";

const Starting = props => {
	return (
		<Grid>
			<span className="one" />
			<span className="two" />
			<span className="three" />
		</Grid>
	);
}

const Grid = styled.div`
	width: 100%; height: 100%;
	display: grid;
	overflow: hidden;
	background-color: white;
	gap: 4%;
	overflow: hidden;
	grid-template: 
		[row1-start] "one two" 48% [row1-end]
		[row2-start] "one three" 48% [row2-end]
		/ auto;
	span {
		background-color: var(--pDarker);
	}
	.one {
		grid-area: one;
	}
	.two {
		grid-area: two;
	}
	.three {
		grid-area: three;
		margin-left: -10%;
	}
`;

export default Starting;