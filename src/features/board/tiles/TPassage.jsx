import React from "react";
import styled from "styled-components";

const TPassage = props => {
	return (
		<STPassage>
			<span className="vertical" />
			<span className="sideways" />
		</STPassage>
	);
}

const STPassage = styled.span`
	height: 100%; width: 100%;
	display: flex;
	flex-flow: column nowrap;
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