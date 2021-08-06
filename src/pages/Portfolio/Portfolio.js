import React from 'react'
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import portfolioData from '../../utils/portfolioData'
import './Portfolio.css'

import CustomImage from '../../components/CustomImage/CustomImage';

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Portfolio = () => {
    return (
      <>
        <Grid item className="section_title mb_30">
          <span></span>
          <h6>Porfolio</h6>
        </Grid>
        <Grid container spacing={3}>
          {portfolioData.projects.map((project) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea>
                  <CardMedia>
                      <CustomImage image={project.image} />
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    href={project.GithubLink}
                  >
                    {project.GithubIcon}
                  </Button>
                  <Button size="small" color="primary" href={project.liveLink}>
                    {project.liveIcon}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    );
}

export default Portfolio
