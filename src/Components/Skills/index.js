import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RootDiv = styled.div`
  display: flex;
  flex-direction: column; /* make main axis horizontal (default setting) */
  justify-content: flex-start;
  width: 100%;
  color: white;
  padding-bottom: 20px;
`;

const SkillContainer = styled.div`
  display: flex;
  text-align: left;
  align-self: center;
  width: 90%;
  margin: 10px;
`;

const SkillTitle = styled.div`
  width: 110px;
  margin: auto;
`;

const SkillVisual = styled.div`
  margin-right: auto;
`;

const PercentValue = styled.div`
  width: 10%;
  text-align: center;
  margin: auto;
`;

const Skills = ({ skills }) => {
  const skillDisplay = skills.map((item, index) => {
    const percent = item.total;
    return (
      <SkillContainer key={index} id="skill container">
        <SkillTitle id="skillbar title">{item.name}</SkillTitle>
        <SkillVisual
          id="skillbar display"
          style={{
            width: `${item.total}%`,
            backgroundColor: `hsl( 190, 90%, ${100 / 3.5}%)`,
          }}
        >
          {skills.total}
        </SkillVisual>
        <div style={{ width: `${100 - item.total}%` }} />
        <PercentValue>
          <span>{percent}%</span>
        </PercentValue>
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
