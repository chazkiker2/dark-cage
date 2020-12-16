import React from "react";
import styled from "styled-components";

const FourPassage = props => {
	return (
		<Grid>
			<span className="one" />
			<span className="two" />
			<span className="three" />
			<span className="four" />
		</Grid>
	)
}

const Grid = styled.div`
	width: 100%; height: 100%;
	display: grid;
	overflow: hidden;
	background-color: white;
	gap: 4%;
	grid-template: 
		[row1-start] "one two" 48% [row1-end]
		[row2-start] "three four" 48% [row2-end]
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
	}
	.four {
		grid-area: four;
	}
`;

export default FourPassage;