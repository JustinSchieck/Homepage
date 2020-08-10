import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RootDiv = styled.div`
  display: flex;
  flex-direction: row; /* make main axis horizontal (default setting) */
  justify-content: center; /* center items horizontally, in this case */
  align-items: center; /* center items vertically, in this case */
  width: 100%;
  background-color: white;
  padding: 100px 0px;
`;

const Values = ({ skills }) => {
  return <RootDiv className="root values"></RootDiv>;
};

export default Values;
