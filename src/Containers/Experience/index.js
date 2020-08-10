import React from "react";
import styled from "styled-components";
import {
	School as SchoolIcon,
	Work as WorkIcon,
	ArrowDownward,
} from "@material-ui/icons";

import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const RootDiv = styled.div`
	min-height: 450px;
	width: 100%;
	margin: 0 0 20px 0;
`;

const TitleDiv = styled.h1`
	font-size: 32px;
	padding: 10px 0 20px 0;
	width: 100%;
	margin: 0;
`;

const Experience = () => {
	return (
		<RootDiv>
			<TitleDiv>Experience</TitleDiv>
			<VerticalTimeline>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
					contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
					date="2018 - present"
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
					icon={<WorkIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						Full Stack Software Engineer
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Manulife Financial
					</h4>
					{/* <h5>Waterloo, Ontario</h5> */}
					<p>React, Node, AODA, Jenkins, New Relic, REST APIs, Gitlab, Redux</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2016 - 2018"
					iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
					icon={<WorkIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						Web Developer Co-op
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Barrie, Ontario
					</h4>
					<p>HTML, CSS, PHP, Wordpress, Web Design</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					date="January 2016"
					iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
					icon={<SchoolIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						Computer Programming
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Georgian College
					</h4>
					<p>Java, MEAN stack, C#, C++, IOT, sql, cobalt</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
					icon={<ArrowDownward />}
				/>
			</VerticalTimeline>
		</RootDiv>
	);
};

export default Experience;
