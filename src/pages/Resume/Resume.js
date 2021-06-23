import { Grid, Typography } from "@material-ui/core";
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
        <Grid container className="section">
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
                      <TimelineContent>
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
                      <TimelineContent>
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
        <Grid container className="section"></Grid>
        {/* Skills */}
        <Grid container className="section"></Grid>
        {/* Contact */}
        <Grid container className="section"></Grid>
      </>
    );
}

export default Resume
