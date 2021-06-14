import React from "react";
import styled from "styled-components";

const RootDiv = styled.div`
  display: flex;
  flex-direction: row; /* make main axis horizontal (default setting) */
  justify-content: center; /* center items horizontally, in this case */
  align-items: center; /* center items vertically, in this case */
  width: 100%;
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
  max-height: 450px;
  border: black solid 2px;
  border-radius: 25%;
`;

const WelcomeTitle = styled.span`
  background: red;
  background: -webkit-linear-gradient(
    left,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );
  background: -o-linear-gradient(
    right,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );
  background: -moz-linear-gradient(
    right,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );
  background: linear-gradient(
    to right,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const About = () => {
  return (
    <RootDiv className="root about">
      <LeftSection>
        <PersonalImg src="Headshot.png" alt="Justin Schieck Self Photo" />
      </LeftSection>
      <RightSection>
        <div>
          <h1>
            <WelcomeTitle>Welcome! </WelcomeTitle>Im Justin and I'm currently an
            Associate Fullstack Engineer at Manulife Financial's AEM team.
          </h1>
          <p>
            I’ve spent the past 5+ years working across different areas of
            digital design; front-end development, automatic email processing,
            marketing site pages, working with WCAG, to my current role updating
            and redesigning dynamic components inside Adobe Experience Manager.
          </p>
          <p>
            These days my time is spent researching, designing, and coding. I
            also help designers get started with their WCAG guidance as I am a
            subject matter expert.
          </p>
          <p>
            Out of the office you’ll find me dreaming of game design, playing
            guitar, DIY/Maker projects and Working out.
          </p>
        </div>
      </RightSection>
    </RootDiv>
  );
};

export default About;
