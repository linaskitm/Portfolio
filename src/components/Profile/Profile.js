import React from "react";
import { Link, withRouter } from "react-router-dom";

import {Typography } from "@material-ui/core";
import image from '../../assets/images/demo2.jpg'
import CustomTimeline, {
  CustomTimeLineSeparator,
} from "../Timeline/CustomTimeline";
import resumeData from '../../utils/resumeData'
import PersonIcon from "@material-ui/icons/Person";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomButton from '../Button/Button'
import GetAppIcon from "@material-ui/icons/GetApp";
import WorkIcon from "@material-ui/icons/Work";
import EmailIcon from "@material-ui/icons/Email";
import './Profile.css'

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    {/* title: text  e.g Name: Linas or Email: lpelenis@gmail.com*/}
    <CustomTimeLineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          {" "}
          <span>{title}</span>{" "}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          {" "}
          <span>{title}</span>{" "}
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile cointainer_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <div className="profile_image">
        <img src={image} alt="myFoto" />
      </div>

      <div className="profile_information">
        <CustomTimeline icon={<PersonIcon />}>
          <CustomTimelineItem title={<PersonIcon />} text={resumeData.name} />
          <CustomTimelineItem title={<WorkIcon />} text={resumeData.title} />
          <CustomTimelineItem title={<EmailIcon />} text={resumeData.email} />

          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={resumeData.socials[key].icon}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <div className="button_container">
          <Link to="/files/LinasPelenisCv.pdf" target="_blank">
            <CustomButton
              text={"Download Cv"}
              icon={<GetAppIcon />}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Profile);
