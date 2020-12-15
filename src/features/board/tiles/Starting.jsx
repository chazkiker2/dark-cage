import React, { useState } from "react";
import styled from "styled-components";

const Starting = props => {
	const [rotation, setRotation] = useState(0);
	const rotate = () => {
		setRotation(rotation + 90 >= 360 ? rotation - 270 : rotation + 90);
	}

	return (
		<StartTile onClick={rotate} rotation={rotation}>
			<span className="one" />
			<span />
		</StartTile>
	)
}

const StartTile = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	background: var(--pDarker);
	transform: ${props => `rotate(${props.rotation}deg)`};
	transition: transform 0.2s ease-in-out;
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