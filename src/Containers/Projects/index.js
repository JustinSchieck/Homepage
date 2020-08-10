import React from "react";
import styled from "styled-components";
import CardComponent from "../CardComponent";
import { Grid } from "@material-ui/core";

const RootDiv = styled.div`
	min-height: 450px;
	width: 100%;
	margin: 0 0 20px 0;
`;

const TitleDiv = styled.h1`
	font-size: 32px;
	padding: 10px 0 20px 0;
	width: 100%;
`;

const roboticArmDescription =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id consectetur ex. ";
const SandboxDescription =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";

const Projects = () => {
	return (
		<RootDiv className="root values">
			<TitleDiv>Projects</TitleDiv>
			<Grid
				container
				direction="row"
				justify="center"
				alignItems="center"
				xs={12}
			>
				<CardComponent
					image="roboticArmv2.jpg"
					title="Arduino Controlled Robotioc Arm"
					description={roboticArmDescription}
				/>
				<CardComponent
					title="Augmented Reality Sandbox"
					description={SandboxDescription}
				/>

				<CardComponent
					image="roboticArmv2.jpg"
					title="Arduino Controlled Robotioc Arm"
					description={roboticArmDescription}
				/>
			</Grid>
		</RootDiv>
	);
};

export default Projects;
