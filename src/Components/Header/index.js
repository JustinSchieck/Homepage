import React from "react";
import styled from "styled-components";

const RootDiv = styled.div`
  height: 60px;
  width: 100%;
  background-color: darkgray;
  display: flex;
  align-items: center; /* align vertical */
  font-size: 18px;
  font-family: font-family: 'PT Serif', serif;

`;

const NavDiv = styled.div`
	margin: 0 20px;
	flex-grow: 1;
	display: flex;
`;
const LogoDiv = styled.div`
	width: 30%;
`;

const LinkParent = styled.div`
	margin: 0 30px;
	display: flex;
	width: 70%;
	justify-content: flex-end;
`;

const LinkDiv = styled.div`
	display: flex;
	width: 40%;
`;

const Link = styled.a`
	color: black;
	font-family: "PT Serif", serif;
	font-size: 18px;
	text-decoration: none;
	margin: auto;
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
