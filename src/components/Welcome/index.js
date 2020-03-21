import React from "react";
import styled from "styled-components";

const RootDiv = styled.div`
  height: 100%;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  display: flex;
`;

const Welcome = () => {
  return (
    <RootDiv>
      <p>Picture of me</p>
      <p>description</p>
    </RootDiv>
  );
};

export default Welcome;
