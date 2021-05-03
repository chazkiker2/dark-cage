import React from "react";
import styled from "styled-components";

const Starting = props => {
	return (
		<StyledStart>
			<Circle>
				<h1>S</h1>
			</Circle>
			<Grid>
				<span className="one" />
				<span className="two" />
				<span className="three" />
			</Grid>
		</StyledStart>
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
	z-index: 1;
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
	background-color: gray;
	gap: 4%;
	overflow: hidden;
	grid-template: 
		[row1-start] "one two" 48% [row1-end]
		[row2-start] "one three" 48% [row2-end]
		/ auto;
	span {
		background-color: var(--pDark);
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

const StyledStart = styled.div`
	width: 100%; height: 100%;
	overflow: hidden;
	text-align: center;
`;

export default Starting;