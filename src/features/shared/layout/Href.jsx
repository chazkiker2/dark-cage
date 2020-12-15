import React from "react";
import styled from "styled-components";
import { clickerStyles, secondaryClickerStyles } from "./Link";

const Href = ({ children, secondary, ...props }) => {
	return (
		<StyledHref secondary={secondary} {...props}>
			{children}
		</StyledHref>
	)
}

const StyledHref = styled.a`
	${clickerStyles};
	${props => {
		return (props.secondary && secondaryClickerStyles);
	}};
`;

export default Href;