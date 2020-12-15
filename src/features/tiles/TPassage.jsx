import React from "react";
import styled from "styled-components";

const TPassage = props => {
	return (
		<SGrid>
			<div className="one" />
			<div className="two" />
			<div className="three" />
		</SGrid>
	)
}

const SGrid = styled.div`
	width: 100%; height: 100%;
	display: grid;
	overflow: hidden;
	background-color: white;
	gap: 4%;
	overflow: hidden;
	grid-template: 
		[row1-start] "one two" 48% [row1-end]
		[row2-start] "three three" 48% [row2-end]
		/ auto;
	div {
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
`;

export default TPassage;