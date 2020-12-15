import React, { useState } from "react";
import styled from "styled-components";

const FourPassage = props => {
	const [rotation, setRotation] = useState(0);
	const rotate = () => {
		let newRotation = rotation + 90;
		if (newRotation >= 360) {
			newRotation -= 360;
		}
		setRotation(newRotation);
	}

	return (
		<S4Passage onClick={rotate} rotation={rotation}>
			<span />
		</S4Passage>
	)
}

const S4Passage = styled.span`
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
		height: 100%;
		width: 100%;
		text-align: center;
		display:inline-block;

		background:
			linear-gradient(#fff,#fff),
			linear-gradient(#fff,#fff),
			var(--pDarker);
		background-position:center;
		background-size: 100% 2px,2px 100%;
		background-repeat:no-repeat;
	}

`;

export default FourPassage;