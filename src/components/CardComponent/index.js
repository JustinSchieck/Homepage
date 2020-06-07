import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	rootDiv: {
		maxWidth: 300,
		minWidth: 150,
		height: 300,
	},
	media: {
		height: 200,
	},
	button: {
		height: 300,
		padding: 0,
	},
	title: {
		fontSize: "16px",
	},
	CardContentDiv: {
		padding: "8px",
	},
});

// Wants:
// Title, image, description (with content limits), card buttons, Sorting index
// Feature note: card expand into large modal showing more details about the project
// including urls to said projects

const CardComponent = (props) => {
	const { image, title, description, date, tags } = props;
	const classes = useStyles();

	return (
		<Grid item xs={12} sm={6} md={4}>
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
						<Typography variant="body2" color="textSecondary" component="p">
							{description}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
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
