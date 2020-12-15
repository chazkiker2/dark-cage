import React from "react";
import styled from "styled-components";

const Key = props => {
	return (
		<StyledGate>
			<Circle>
				<h1>K</h1>
			</Circle>
			<Grid>
				<span className="one" />
				<span className="two" />
				<span className="three" />
				<span className="four" />
			</Grid>
		</StyledGate>
	);
}

const Circle = styled.div`
	width: 50%; height: 50%;
	position: absolute;
	z-index: 1;
	background-color: yellow;
	transform: translate(50%, 50%) rotate(45deg);
	border: 0px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	h1 {
		text-align: center;
		position: relative;
		color: black;
		background-color: none;
		background: none;
		font-size: 4rem;
		transform: rotate(-45deg);
	}
`;

const StyledGate = styled.div`
	width: 100%; height: 100%;
	overflow: hidden;
	text-align: center;
	
`;

const Grid = styled.div`
	width: 100%; height: 100%;
	display: grid;
	overflow: hidden;
	background-color: yellow;
	gap: 4%;
	overflow: hidden;
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

export default Key;