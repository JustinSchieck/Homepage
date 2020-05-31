import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Card from "../Card";

const RootDiv = styled.div`
	display: flex;
	min-height: 500px;
`;

const CardSection = styled.div`
	flex-direction: row;
	justify-content: space-evenly;
	margin: 20px;
`;

const roboticArmDescription =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id consectetur ex. Pellentesque et dui est. Quisque nulla dolor, tempus eu ipsum porttitor, gravida commodo velit. Aliquam congue fringilla tortor, vel auctor enim commodo ut. Nam mi dolor, venenatis eu mauris ut, hendrerit dignissim est. Mauris auctor et erat ac mattis. Donec eu leo viverra purus aliquet posuere. Pellentesque lacinia ante et mauris interdum aliquam. Quisque euismod nisl ac iaculis elementum. Quisque venenatis in purus et malesuada. Morbi quis elit leo. Pellentesque nulla metus, mollis sit amet imperdiet id, eleifend ut justo. Praesent id auctor felis. Sed tempus finibus erat at suscipit. Proin ultrices velit ac eros porttitor laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc eget lectus vulputate, euismod nibh vel, mattis tellus. Sed sit amet vestibulum quam. Fusce ac tortor euismod, porta ante et, malesuada tortor. Duis scelerisque ornare lacus, vel tempus ligula congue commodo. Duis tristique, elit tempor tempor rutrum, sapien magna dapibus nulla, egestas volutpat mi libero ac nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse at mi sed nisi volutpat vehicula. Morbi tincidunt turpis non enim facilisis, nec tempor sapien congue. Praesent in ligula eget.";
const SandboxDescription =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id consectetur ex. Pellentesque et dui est. Quisque nulla dolor, tempus eu ipsum porttitor, gravida commodo velit. Aliquam congue fringilla tortor, vel auctor enim commodo ut. Nam mi dolor, venenatis eu mauris ut, hendrerit dignissim est. Mauris auctor et erat ac mattis. Donec eu leo viverra purus aliquet posuere. Pellentesque lacinia ante et mauris interdum aliquam. Quisque euismod nisl ac iaculis elementum. Quisque venenatis in purus et malesuada. Morbi quis elit leo. Pellentesque nulla metus, mollis sit amet imperdiet id, eleifend ut justo. Praesent id auctor felis. Sed tempus finibus erat at suscipit. Proin ultrices velit ac eros porttitor laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc eget lectus vulputate, euismod nibh vel, mattis tellus. Sed sit amet vestibulum quam. Fusce ac tortor euismod, porta ante et, malesuada tortor. Duis scelerisque ornare lacus, vel tempus ligula congue commodo. Duis tristique, elit tempor tempor rutrum, sapien magna dapibus nulla, egestas volutpat mi libero ac nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse at mi sed nisi volutpat vehicula. Morbi tincidunt turpis non enim facilisis, nec tempor sapien congue. Praesent in ligula eget.";

const Projects = () => {
	return (
		<RootDiv className="root values">
			<CardSection>
				<Card
					image="roboticArmv2.jpg"
					title="Arduino Controlled Robotioc Arm"
					description={roboticArmDescription}
				/>
				<Card
					title="Augmented Reality Sandbox"
					description={SandboxDescription}
				/>
			</CardSection>
		</RootDiv>
	);
};

export default Projects;
