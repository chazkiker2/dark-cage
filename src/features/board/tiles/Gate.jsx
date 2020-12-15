import React from "react";
import styled from "styled-components";
import FourPassage from "./FourPassage";

const Gate = props => {
	return (
		<StyledGate>
			<Circle>
				{/* <svg height="100" width="100">
					<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
				</svg> */}
				<h1>G</h1>
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
	background-color: lightgoldenrodyellow;
	transform: translate(50%, 50%);
	border-radius: 50%;
	border: 0px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	h1 {
		color: black;
		background-color: none;
		background: none;
		font-size: 4rem;
		position: relative;
	}
	/* background-color: transparent; */
`;

const StyledGate = styled.div`
	width: 100%; height: 100%;
	overflow: hidden;
	text-align: center;
	
`;

const Grid = styled.div`
	/* position: relative; */
	width: 100%; height: 100%;
	display: grid;
	overflow: hidden;
	/* background-color: var(--pLighter); */
	background-color: #FFF;
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

export default Gate;