import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CardComponent from "../CardComponent";
import { Grid } from "@material-ui/core";

const RootDiv = styled.div`
	min-height: 500px;
	padding: 40px 0;
`;

const roboticArmDescription =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id consectetur ex. Pellentesque et dui est. Quisque nulla dolor, tempus eu ipsum porttitor, gravida commodo velit.";
const SandboxDescription =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id consectetur ex. Pellentesque et dui est. Quisque nulla dolor, ";

const Projects = () => {
	return (
		<RootDiv className="root values">
			<Grid container direction="row" justify="center" alignItems="center">
				<CardComponent
					image="roboticArmv2.jpg"
					title="Arduino Controlled Robotioc Arm"
					description={roboticArmDescription}
				/>
				<CardComponent
					title="Augmented Reality Sandbox"
					description={SandboxDescription}
				/>
			</Grid>
		</RootDiv>
	);
};

export default Projects;
