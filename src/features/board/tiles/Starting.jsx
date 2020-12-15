import React from "react";
import styled from "styled-components";

const Starting = props => {
	return (
		<StartTile>
			<span className="one" />
			<span />
		</StartTile>
	)
}

const StartTile = styled.div`
	height: 100%; width: 100%;
	display: flex;
	flex-flow: column nowrap;
	overflow: hidden;
	span {
		display: inline-block;
		height: 89px;
		width: 100%;
		background: linear-gradient(#fff, #fff), var(--pDarker);
		background-size: 50% 2px;
		background-repeat: no-repeat;
		overflow: hidden;
		&.one {
			position: relative;
			text-align: left;
			transform: rotate(90deg);
			background-position: center;
			background-size: 50% 2px;
			z-index: -1;
		}
	}
`;

export default Starting;