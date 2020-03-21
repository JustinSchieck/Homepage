import React from "react";
import styled from "styled-components";

const RootDiv = styled.div`
  display: flex;
  flex-direction: row; /* make main axis horizontal (default setting) */
  justify-content: center; /* center items horizontally, in this case */
  align-items: center; /* center items vertically, in this case */
  width: 100%;
  background-color: #b4caed;
`;

const PersonalImg = styled.img`
  max-height: 300px;
  border: black solid 2px;
  border-radius: 50%;
`;

const AboutTextDiv = styled.div`
  width: 500px;
`;

const About = () => {
  return (
    <RootDiv className="root about">
      <div style={{ margin: "50px 0px;" }}>
        <PersonalImg src="me.png" alt="justin" />
      </div>
      <AboutTextDiv>
        <span>About me</span>
      </AboutTextDiv>
    </RootDiv>
  );
};

export default About;
