import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TitleText = styled.p`
  width: 100%;
`;
const RootDiv = styled.div`
  display: flex;
  flex-direction: column; /* make main axis horizontal (default setting) */
  justify-content: flex-start;
  align-items: center; /* center items vertically, in this case */
  width: 100%;
  padding: 0px 20px;
`;

const SkillContainer = styled.div`
  width: 100%;
`;

const SkillTitle = styled.div`
  width: 15%;
`;

const SkillVisual = styled.div`
  width: auto;
`;

const Skills = ({ skills }) => {
  const skillDisplay = skills.map((item, index) => {
    return (
      <SkillContainer key={index} id="skill container">
        <SkillTitle id="skillbar title">{item.name}</SkillTitle>
        <SkillVisual id="skillbar display">{skills.total}</SkillVisual>
      </SkillContainer>
    );
  });

  return <RootDiv className="root values">{skillDisplay}</RootDiv>;
};

Skills.propTypes = {
  member: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
    })
  ),
};

export default Skills;
