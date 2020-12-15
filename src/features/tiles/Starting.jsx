import React from "react";
import styled from "styled-components";

const Starting = props => {
	return (
		<Grid>
			<Circle>
				<h1>S</h1>
			</Circle>
			<span className="one" />
			<span className="two" />
			<span className="three" />
		</Grid>
	);
}

const Circle = styled.div`
	width: 50%; height: 50%;
	position: absolute;
	z-index: 1;
	background-color: white;
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
`;

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