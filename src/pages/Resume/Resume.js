import { Grid, Typography, Icon, Paper } from "@material-ui/core";
import React from 'react'
import resumeData from '../../utils/resumeData'

import CustomTimeline, {
  CustomTimeLineSeparator,
} from "../../components/Timeline/CustomTimeline";
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from "@material-ui/icons/School";

import './Resume.css'
import TimelineContent from "@material-ui/lab/TimelineContent";
import { TimelineItem, TimelineConnector, TimelineDot, TimelineSeparator } from "@material-ui/lab";
 
const Resume = () => {
    return (
      <>
        {/* About me */}
        <Grid container className="section pb_45">
          <Grid item className="section_title mb_30">
            <span></span>
            <h6>About me</h6>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" className="aboutme_text">
              {resumeData.about}
            </Typography>
          </Grid>
        </Grid>
        {/* Education and experience */}
        <Grid container className="section pb_45">
          <Grid item className="section_title mb_30">
            <span></span>
            <h6>Resume</h6>
          </Grid>

          <Grid item xs={12}>
            <Grid container>
              {/* Experience */}
              <Grid className="resume_timeline" item sm={12} md={6}>
                <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
                  {resumeData.experiences.map((experience) => (
                    <TimelineItem>
                      <CustomTimeLineSeparator />
                      <TimelineContent className="pb_45">
                        <Typography className="timeline_title">
                          {experience.title}
                        </Typography>
                        <Typography variant="caption" className="timeline_date">
                          {experience.date}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="timeline_description"
                        >
                          {experience.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </CustomTimeline>
              </Grid>
              {/* Education */}
              <Grid className="resume_timeline" item sm={12} md={6}>
                <CustomTimeline title="Education" icon={<SchoolIcon />}>
                  {resumeData.educations.map((education) => (
                    <TimelineItem>
                      <CustomTimeLineSeparator />
                      <TimelineContent className="pb_45">
                        <Typography className="timeline_title">
                          {education.title}
                        </Typography>
                        <Typography variant="caption" className="timeline_date">
                          {education.date}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="timeline_description"
                        >
                          {education.description}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </CustomTimeline>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Services */}
        {/* <Grid container className="section pb_45">
          <Grid item className="section_title mb_30">
            <span></span>
            <h6>Services</h6>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3} justity="space around">
              {resumeData.services.map((service) => (
                <Grid item xs={6} sm={6} md={4}>
                  <div className="service">
                    <Icon className="service_icon">{service.icon}</Icon>
                    <Typography className="service_title" variant="h6">
                      {service.title}
                    </Typography>
                    <Typography className="service_description" variant="body2">
                      {service.description}
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid> */}
        {/* Skills */}
        <Grid container>
          <Grid item className="section_title mb_30">
            <span></span>
            <h6>Skills</h6>
          </Grid>

          <Grid
            container
            spacing={3}
            jutify="space-between"
            className="section pb_45"
          >
            {resumeData.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className="skill">
                  <Typography variant="h6" className="skill_title">
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography variant="body2" className="skill_description">
                      <TimelineDot variant="outline" className="timeline_dot" />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* Contact */}
        <Grid container className="section"></Grid>
      </>
    );
}

export default Resume
