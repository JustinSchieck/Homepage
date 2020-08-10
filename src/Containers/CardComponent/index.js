import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	rootDiv: {
		maxWidth: 350,
		minWidth: 150,
		height: 300,
		margin: "15px",
	},
	media: {
		height: "60%",
		padding: 0,
	},
	button: {
		height: 300,
		padding: 0,
	},
	title: {
		fontSize: "16px",
	},
	CardContentDiv: {
		height: "inherit",
	},
	GridStyle: {
		marginBottom: "20px",
		paddingLeft: "10px",
		paddingRight: "10px",
	},
	Description: {
		textAlign: "left",
	},
});

// Wants:
// Title, image, description (with content limits), card buttons, Sorting index
// Feature note: card expand into large modal showing more details about the project
// including urls to said projects

const CardComponent = ({ image, title, description, date, tags }) => {
	const classes = useStyles();

	return (
		<Card className={classes.rootDiv}>
			<CardActionArea className={classes.button}>
				<CardMedia className={classes.media} image={image} title={title} />
				<CardContent className={classes.CardContentDiv}>
					<Typography
						gutterBottom
						variant="h5"
						component="h2"
						className={classes.title}
					>
						{title}
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
						className={classes.Description}
					>
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

CardComponent.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string.isRequired,
	description: PropTypes.node,
	date: PropTypes.string.isRequired,
	tags: PropTypes.object.isRequired,
};

CardComponent.defaultProps = {
	image: "placeholderCard.jpg",
	desription: "",
};

export default CardComponent;
