import React from "react";
import styled from "styled-components";

const StraightPassage = props => {
	return (
		<SPassageGrid>
			<span className="one" />
			<span className="two" />
		</SPassageGrid>
	)
}

const SPassageGrid = styled.div`
	height: 100%; width: 100%;
	overflow: hidden;
	display: grid;
	background-color: white;
	gap: 4%;
	grid-template:
		[row1-start] "one" 48% [row1-end]
		[row2-start] "two" 48% [row2-end] / auto;
	span {
		background-color: var(--pDarker);
	}
	.one {
		grid-area: one;
	}
	.two {
		grid-area: two;
	}
`;

export default StraightPassage;