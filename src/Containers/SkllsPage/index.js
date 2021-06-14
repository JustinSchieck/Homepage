import React from "react";
import styled from "styled-components";
import Skills from "../../Components/Skills";

const RootDiv = styled.div`
  min-height: 450px;
  width: 100%;
  margin: 0 0 20px 0;
  height: 100vh;
`;

const TitleDiv = styled.h1`
  font-size: 32px;
  padding: 10px 0 20px 0;
  width: 100%;
  margin: 0;
`;

const DescDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 40%;
`;

const skillList = [
  {
    name: "HTML",
    total: 100,
  },
  {
    name: "CSS",
    total: 90,
  },
  {
    name: "Javascript",
    total: 90,
  },
  {
    name: "ES6",
    total: 85,
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
    total: 65,
  },
];

const SkillsPage = () => {
  return (
    <RootDiv>
      <DescDiv>
        <div>dynamic</div>
        <div>user friendly</div>
        <div>responsive</div>
      </DescDiv>
      <Skills skills={skillList} />
    </RootDiv>
  );
};

export default SkillsPage;
