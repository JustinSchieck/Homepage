import React from "react";
import styled from "styled-components";

const RootDiv = styled.div`
  height: 60px;
  width: 100%;
  background-color: #37323C;
  color: white;
  display: flex;
  align-items: center; /* align vertical */

  font-size: 18px;
  font-family: 'Roboto', sans-serif;
`;

const NavDiv = styled.div`
	margin: 0 20px;
	flex-grow: 1;
	display: flex;
	justify-content: space-between;
`;
const LogoDiv = styled.div`
	justify-content: flex-start;
`;

const LinkParent = styled.div`
	margin: 0 30px;
	display: flex;
	justify-content: flex-end;
`;

const LinkDiv = styled.div`
	display: flex;
`;

const Link = styled.a`
	color: white;
	text-decoration: none;
	margin: auto;
	padding: 0 10px;
`;

const Header = () => {
	return (
		<RootDiv>
			<NavDiv>
				<LogoDiv>
					<img src="Logo.png" alt="logo" />
				</LogoDiv>
				<LinkParent>
					<LinkDiv>
						<Link href="#about">About</Link>
						<Link href="#projects">Projects</Link>
						<Link href="#education">History</Link>
						<Link href="#contact">Contact</Link>
					</LinkDiv>
				</LinkParent>
			</NavDiv>
		</RootDiv>
	);
};

export default Header;
