import React from "react";
import styled from "styled-components";

const RootDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* center items horizontally, in this case */
  align-items: center; /* center items vertically, in this case */
  font-size: 18px;
  font-family: font-family: 'PT Serif', serif;
`;

const TitleText = styled.p`
  width: 100%;
`;

const Header = () => {
  return (
    <RootDiv>
      <TitleText>Skills</TitleText>
      <ul>
        <li>
          <div>
            <h3>Html</h3>
          </div>
          <div>
            <span></span>
          </div>
        </li>
        <li>
          <div>
            <h3>Javascript/JQuery</h3>
          </div>
          <div>
            <span></span>
          </div>
        </li>
        <li>
          <div>
            <h3>React</h3>
          </div>
          <div>
            <span></span>
          </div>
        </li>
        <li>
          <div>
            <h3>Node</h3>
          </div>
          <div>
            <span></span>
          </div>
        </li>
        <li>
          <div>
            <h3>Express</h3>
          </div>
          <div>
            <span></span>
          </div>
        </li>
        <li>
          <div>
            <h3>Mongo</h3>
          </div>
          <div>
            <span></span>
          </div>
        </li>
      </ul>
    </RootDiv>
  );
};

export default Header;
