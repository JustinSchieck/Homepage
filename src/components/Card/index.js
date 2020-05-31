import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RootDiv = styled.div`
	height: 350px;
	width: 320px;
	text-align: left;
	border: 1px black solid;
`;

const ImageSection = styled.div`
	height: 50%;
`;

const CardImg = styled.img`
	height: 100%;
	min-inline-size: -webkit-fill-available;
`;

const CardTitle = styled.div`
	font-size: 18px;
	padding: 10px;
	font-weight: 600;
`;

const CardDescription = styled.div`
	display: -webkit-box;
	-webkit-line-clamp: 6; /* number of lines to show */
	-webkit-box-orient: vertical;
	font-size: 12px;
	padding: 10px 30px 0 30px;
	overflow: hidden;
	text-overflow: ellipsis;
`;
// Wants:
// Title, image, description (with content limits), card buttons, Sorting index
// Feature note: card expand into large modal showing more details about the project
// including urls to said projects

const Card = (props) => {
	const { image, title, description, date, tags } = props;

	return (
		<RootDiv>
			<ImageSection>
				<CardImg src={`${image}`} />
			</ImageSection>

			<CardTitle>{title}</CardTitle>
			<CardDescription>{description}</CardDescription>
		</RootDiv>
	);
};

Card.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string.isRequired,
	description: PropTypes.node,
	date: PropTypes.string.isRequired,
	tags: PropTypes.object.isRequired,
};

Card.defaultProps = {
	image: "placeholderCard.jpg",
	desription: "",
};

export default Card;
