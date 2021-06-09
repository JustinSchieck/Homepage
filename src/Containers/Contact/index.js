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

//need to come back to this for mobile 100% width etc.
const RowDiv = styled.div`
	width: 50%; 
	margin: auto;
`;

const ContactSection = styled.div`
	margin: 0 10px 0 20px;
`;


const Contact = () => {
	return (
		<RootDiv className="root values">
			<TitleDiv>Contact</TitleDiv>
			<RowDiv>
				<ContactSection>
					<ContactForm />
				</ContactSection>
			</RowDiv>
		</RootDiv>
	);
};

export default Contact;
