import React from "react";
import styled from "styled-components";
import ContactForm from "../../Components/ContactForm";

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

const RowDiv = styled.div`
	display: flex;
	flex-direction: row; /* make main axis horizontal (default setting) */
	justify-content: center; /* center items horizontally, in this case */
	align-items: center; /* center items vertically, in this case */
`;

const ContactSection = styled.div`
	width: 40%;
	margin: 0 10px 0 20px;
`;

const ResumeSection = styled.div`
	width: 40%;
	margin: 0 20px 0 10px;
	justify-content: center; /* center items horizontally, in this case */
	align-items: center; /* center items vertically, in this case */
`;

const ButtonSection = styled.div`
	height: 100%;
`;

const ButtonSubtitle = styled.div`
	font-size: 28px;
	weight: 600;
	padding: 0 0 10px 0;
`;

const ResumeButton = styled.button`
	font-size: 20px;
	height: 50px;
	width: 210px;
	cursor: pointer;
	color: black;
	border: 3px black solid;
	border-radius: 5px;
`;

const Contact = () => {
	return (
		<RootDiv className="root values">
			<TitleDiv>Contact</TitleDiv>
			<RowDiv>
				<ContactSection>
					<ContactForm />
				</ContactSection>
				<ResumeSection>
					<ButtonSection>
						<ButtonSubtitle>Download My Resume PDF Here!</ButtonSubtitle>
						<ResumeButton>Download</ResumeButton>
					</ButtonSection>
				</ResumeSection>
			</RowDiv>
		</RootDiv>
	);
};

export default Contact;
