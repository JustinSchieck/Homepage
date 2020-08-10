import React from "react";
import styled from "styled-components";
import { ArrowForward } from "@material-ui/icons";
import About from "../About";
import Projects from "../Projects";
import Experience from "../Experience";
import Contact from "../Contact";

const SectionDiv = styled.div`
	display: block;
	min-height: 200px;
`;

const WelcomeDiv = styled.div`
	width: 100%;
	background-image: url("background.jpg");
	height: 95vh; /* You must set a specified height */
	background-position: center; /* Center the image */
	background-repeat: no-repeat; /* Do not repeat the image */
	background-size: cover;
`;

const TextDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  align-items: center;
  height: 90%;v
`;

const TitleDiv = styled.div`
  font-size: 48px;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
`;

const SubtitleDiv = styled.div`
  font-size: 36px;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
`;

const Name = styled.span`
	color: pink;
`;

const ButtonText = styled.div`
	text-align: center;
	margin: 10px 10px 0 0;
`;

const AboutButton = styled.button`
	display: flex;
	justify-content: center;
	font-size: 20px;
	height: 50px;
	width: 210px;
	margin-top: 30px;
	cursor: pointer;
	border: 3px white solid;
	background: transparent;
	color: white;
`;

const Link = styled.a`
	text-decoration: none;
`;

const Body = () => {
	return (
		<div style={{ height: "100%" }}>
			<WelcomeDiv>
				<TextDiv>
					<TitleDiv>
						Hello, I'm <Name>Justin Schieck</Name>
					</TitleDiv>
					<SubtitleDiv>
						A Full Stack Engineer, Web Developer and WCAG specialist
					</SubtitleDiv>
					<Link href="#about">
						<AboutButton className="transform">
							<ButtonText>Learn More!</ButtonText>
							<ArrowForward
								className="arrowIcon"
								style={{ marginTop: "8px", fontSize: "1.7rem" }}
							/>
						</AboutButton>
					</Link>
				</TextDiv>
			</WelcomeDiv>
			<SectionDiv id="about">
				<About />
			</SectionDiv>
			<SectionDiv id="experience" style={{ backgroundColor: "lightgray" }}>
				<Experience />
			</SectionDiv>
			<SectionDiv id="projects">
				<Projects />
			</SectionDiv>
			<SectionDiv id="contact">
				<Contact />
			</SectionDiv>
		</div>
	);
};

export default Body;
