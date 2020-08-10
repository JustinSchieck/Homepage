import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const RootDiv = styled.div`
	height: 100%;
	width: 100%;
`;

const FormDiv = styled.form`
	max-width: 450px;
	text-align: left;
	margin: auto;
`;

const FullSizeTextField = styled(TextField)`
	width: 100%;
	max-width: 450px;
`;

const TextBox = styled(TextField)`
	width: 100%;
	max-width: 450px;
	margin: 30px 0 !important;
`;

const ButtonSection = styled.div`
	width: 100%;
`;

const SubmitButton = styled.button`
	max-width: 200px;
	min-width: 65px;
	width: 40%;
	height: 50px;
`;

const ContactForm = () => {
	return (
		<RootDiv>
			<FormDiv noValidate autoComplete="off">
				<FullSizeTextField id="standard-basic" label="Full Name" />
				<FullSizeTextField id="standard-basic" label="Subject" />
				<TextBox
					id="outlined-multiline-static"
					label="Message"
					multiline
					rows={5}
					defaultValue="Type message here"
					variant="outlined"
				/>
				<ButtonSection>
					<SubmitButton>Submit</SubmitButton>
				</ButtonSection>
			</FormDiv>
		</RootDiv>
	);
};

export default ContactForm;
