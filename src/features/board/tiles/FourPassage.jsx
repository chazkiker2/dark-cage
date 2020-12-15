import React from "react";
import styled from "styled-components";

const FourPassage = props => {
	return (
		<S4Passage />
	)
}

const S4Passage = styled.span`
	height: 100%;
	width: 100%;
	text-align: center;
	display:inline-block;

	background:
		linear-gradient(#fff,#fff),
		linear-gradient(#fff,#fff),
		var(--pDarker);
	background-position:center;
	background-size: 90% 2px,2px 90%;
	background-repeat:no-repeat;

`;

export default FourPassage;