import React from "react";
import styled from "styled-components";

const RootDiv = styled.div`
  display: flex;
  flex-direction: row; /* make main axis horizontal (default setting) */
  justify-content: center; /* center items horizontally, in this case */
  align-items: center; /* center items vertically, in this case */
  width: 100%;
  background-color: #b4caed;
  padding: 100px 0px;
`;
const LeftSection = styled.div`
  width: 40%;
`;

const RightSection = styled.div`
  width: 40%;
`;

const PersonalImg = styled.img`
  max-height: 300px;
  border: black solid 2px;
  border-radius: 50%;
`;

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
        <p>test</p>
      </RightSection>
    </RootDiv>
  );
};

export default About;
