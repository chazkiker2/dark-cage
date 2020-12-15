import React from "react";
import styled from "styled-components";

const StraightPassage = props => {
	return (
		<SPassage>
			<span />
		</SPassage>
	)
}

const SPassage = styled.div`
	height: 100%; width: 100%;
	overflow: hidden;
	span {
		height: 100%;
		width: 100%;
		text-align: center;
		display:inline-block;
		background:
			linear-gradient(#fff,#fff),
			var(--pDarker);
		background-position:center;
		background-size: 100% 2px;
		background-repeat:no-repeat;
	}
`;

export default StraightPassage;