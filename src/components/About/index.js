import React from "react";
import styled from "styled-components";
import Skills from "../Skills";
import { colors } from "../../constants";

const RootDiv = styled.div`
  display: flex;
  flex-direction: row; /* make main axis horizontal (default setting) */
  justify-content: center; /* center items horizontally, in this case */
  align-items: center; /* center items vertically, in this case */
  width: 100%;
  background-color: ${colors.background};
  color: white;
  padding: 100px 0px;
`;
const LeftSection = styled.div`
  width: 40%;
  margin: 0 20px 0 10px;
`;

const RightSection = styled.div`
  width: 40%;
  margin: 0 10px 0 20px;
`;

const PersonalImg = styled.img`
  max-height: 300px;
  border: black solid 2px;
  border-radius: 50%;
`;

const SkillsTitle = styled.div`
  font-size: 24px;
  margin: 30px auto;
`;

const skillList = [
  {
    name: "HTML",
    total: 100,
  },
  {
    name: "CSS",
    total: 85,
  },
  {
    name: "Javascript",
    total: 85,
  },
  {
    name: "ES6",
    total: 80,
  },
  {
    name: "C#",
    total: 50,
  },
  {
    name: "AODA",
    total: 100,
  },
  {
    name: "REST APIs",
    total: 60,
  },
];

const About = () => {
  return (
    <RootDiv className="root about">
      <LeftSection>
        <PersonalImg src="me.png" alt="justin" />
        <div>About me</div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a
            tristique ante. Phasellus dignissim varius metus auctor consequat.
            Maecenas hendrerit lorem nec enim placerat vulputate. Ut consectetur
            odio tempus orci accumsan malesuada. Sed blandit est vitae neque
            rhoncus, non tempus enim suscipit. Donec ultrices turpis eget velit
            bibendum, vitae pharetra sem vestibulum. Aliquam feugiat mauris ac
            nisi volutpat, quis facilisis lectus imperdiet. In a felis enim. Sed
            euismod blandit purus, vitae volutpat mi feugiat in. Integer
            bibendum massa eu ipsum tincidunt ullamcorper.
          </p>
        </div>
      </LeftSection>
      <RightSection>
        <SkillsTitle>Skills</SkillsTitle>
        <Skills skills={skillList} />
      </RightSection>
    </RootDiv>
  );
};

export default About;
