import React from "react";
import { Typography } from "@material-ui/core";
import image from '../../assets/images/demo.jpg'
import CustomTimeline from '../Timeline/CustomTimeline'

import './Profile.css'

const Profile = () => {
  return (
    <div className="profile cointainer_shadow">
      <div className="profile_name">
        <Typography className="name">Linas</Typography>
        <Typography className="title">Title</Typography>
      </div>

      <figure className="profile_image">
        <img src={image} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeline/>
        <br />
        <button>My button</button>
      </div>
    </div>
  );
};

export default Profile;
