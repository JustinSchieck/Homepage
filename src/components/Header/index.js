import React from "react";
import styled from "styled-components";

const RootDiv = styled.div`
  height: 60px;
  width: 100%;
  background-color: lightblue;
  display: flex;
  align-items: center; /* align vertical */
  font-size: 18px;
  font-family: font-family: 'PT Serif', serif;

`;

const NavDiv = styled.div`
  margin: 0 20px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
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
        <Link href="#about">About</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#education">Education</Link>
        <Link href="#awards">Awards</Link>
        <Link href="#contact">Contact</Link>
        <Link href="#resume">Resume</Link>
      </NavDiv>
    </RootDiv>
  );
};

export default Header;
