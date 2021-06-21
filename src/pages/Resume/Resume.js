import { Grid, Typography } from "@material-ui/core";
import React from 'react'
import resumeData from '../../utils/resumeData'
import './Resume.css'


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
            <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
          </Grid>
        </Grid>
        {/* Education and experience */}
        <Grid container className="section"></Grid>
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
