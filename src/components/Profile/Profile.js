import React from "react";
import { Divider, Typography } from "@material-ui/core";
import image from '../../assets/images/demo.jpg'
import CustomTimeline, {
  CustomTimeLineSeparator,
} from "../Timeline/CustomTimeline";
import resumeData from '../../utils/resumeData'
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomButton from '../Button/Button'
import GetAppIcon from "@material-ui/icons/GetApp";

import './Profile.css'

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    {/* title: text  e.g Name: Linas or Email: lpelenis@gmail.com*/}
    <CustomTimeLineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          {" "}
          <span>{title}:</span>
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          {" "}
          <span>{title}:</span>
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
        <img src={image} alt="" />
      </div>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />

          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <div className="button_container">
          <CustomButton text={"Download Cv"} icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
