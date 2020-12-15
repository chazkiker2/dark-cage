import React from "react";
import styled from "styled-components";
import Header from "../shared/Header";
import ClassicBoard from "./ClassicBoard";

const PlayHome = props => {
	return (
		<>
			<Header />
			<BoardContainer>
				<ClassicBoard />
			</BoardContainer>
		</>
	);
}

const BoardContainer = styled.div`
	width: 100vw;
	height: 100%;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
`;

export default PlayHome;