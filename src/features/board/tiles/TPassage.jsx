import React, { useState } from "react";
import styled from "styled-components";

const TPassage = props => {
	const [rotation, setRotation] = useState(0);
	const rotate = () => {
		let newRotation = rotation + 90;
		if (newRotation >= 360) {
			newRotation -= 360;
		}
		setRotation(newRotation);
	}

	return (
		<STPassage onClick={rotate} rotation={rotation}>
			<span className="vertical" />
			<span className="sideways" />
		</STPassage>
	);
}

const STPassage = styled.span`
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
	.vertical {
		height: 89px;
		width: 100%;
		text-align: left;
		overflow: hidden;
		background:
			linear-gradient(#fff,#fff),
			var(--pDarker);
		background-position:bottom;
		position: relative;
		z-index: 2;
		background-size: 100% 2px;
		background-repeat:no-repeat;
	}
	.sideways {
		position: relative;
		z-index: 1;
		text-align: stretch;
		transform: rotate(90deg);
		display: inline-block;
		/* width: 89px;
		height: 100%; */
		height: 89px;
		width: 100%;
		background: linear-gradient(#fff, #fff), var(--pDarker);
		background-position: center;
		background-size: 50% 2px;
		background-repeat: no-repeat;
		overflow: hidden;
	}
`;

export default TPassage;