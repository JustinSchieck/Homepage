import React from "react";
import styled from "styled-components";

const RootDiv = styled.div`
  height: 300px;
  width: 100%;
  background-color: grey;
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
  font-family: "Lobster Two", cursive;
  font-size: 30px;
`;

const NavDiv = styled.div`
  margin: 0 20px;
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Image = styled.img`
  max-height: 200px;
  max-width: 200px;
  border-radius: 50%;
  border: solid black 3px;
`;

const Link = styled.a`
  color: black;
  font-family: "Lobster Two", cursive;
  font-size: 30px;
  text-decoration: none;
`;

const Header = () => {
  return (
    <RootDiv>
      <NavDiv>
        <Link href="#">About</Link>
        <Link href="#">Expierence</Link>
        <Link href="#">Projects</Link>
        <Link href="#">Skills</Link>
      </NavDiv>
      <Image src="../me.png" alt="portfolio" />
      <NavDiv>
        <Link href="#">Education</Link>
        <Link href="#">Awards</Link>
        <Link href="#">Contact</Link>
        <Link href="#">Resume</Link>
      </NavDiv>
    </RootDiv>
  );
};

export default Header;
