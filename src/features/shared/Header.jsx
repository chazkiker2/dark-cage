import React, { useState } from "react";
import styled from "styled-components";
import layout from "./layout/index";
const { MenuBurger, Link, Heading, Href } = layout;

const Header = props => {
	const [navOpen, setNavOpen] = useState(false);

	const toggleNav = () => {
		setNavOpen(!navOpen);
	}

	return (
		<>
			<StyledHeader>
				<div className="container">
					<div>
						<Heading h1>Night Cage</Heading>
					</div>
					<div>
						<MenuBurger onClick={toggleNav} />
					</div>
				</div>
			</StyledHeader>

			<NavContainer show={navOpen}>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/play">Play</Link>
					<Href href="https://www.thenightcage.com/">The Real Place</Href>
				</nav>
			</NavContainer>
		</>
	);
}

const StyledHeader = styled.header`
	width: 100vw;
	background-color: var(--pDark);
	color: var(--pText);
	padding: 0 2rem;
	div.container {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
	}
	div {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
	}
`;


const NavContainer = styled.nav`
	display: ${pr => pr.show ? "flex" : "none"};
	width: 100vw;
	background-color: var(--pDarker);
	flex-flow: row nowrap;
	justify-content: center;
	nav {
		display: flex;
		width: 100%;
		flex-flow: row nowrap;
		justify-content: center;
	}
`;


export default Header;