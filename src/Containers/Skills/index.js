import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RootDiv = styled.div`
  display: flex;
  flex-direction: column; /* make main axis horizontal (default setting) */
  justify-content: flex-start;

  width: 100%;
  padding: 0px 20px 40px 20px;
  color: white;
`;

const SkillContainer = styled.div`
  display: flex;
  text-align: left;
  align-self: center;
  width: 60%;
  margin: 10px;
`;

const SkillTitle = styled.div`
  width: 100px;
`;

const SkillVisual = styled.div`
  margin-right: auto;
`;

const Skills = ({ skills }) => {
  const skillDisplay = skills.map((item, index) => {
    return (
      <SkillContainer key={index} id="skill container">
        <SkillTitle id="skillbar title">{item.name}</SkillTitle>
        <SkillVisual
          id="skillbar display"
          style={{
            width: `${item.total}%`,
            backgroundColor: `hsl( 200, 80%, ${100 / (index + 3.5)}%)`,
          }}
        >
          {skills.total}
        </SkillVisual>
        <div style={{ width: `${100 - item.total}%` }} />
      </SkillContainer>
    );
  });

  return <RootDiv className="root values">{skillDisplay}</RootDiv>;
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      total: PropTypes.number.isRequired,
    })
  ),
};

export default Skills;
