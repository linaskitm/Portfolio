import React from 'react'
import { Typography } from "@material-ui/core";
import resumeData from '../../utils/resumeData'
import './Footer.css'

const Footer = () => {
    return (
      <div className="footer">
        <div className="footer_left">
          <Typography className="footer_name">{resumeData.name}</Typography>
        </div>
        <div className="footer_right">
          <Typography className="footer_copyright">
            Designed and Developed by Linas Pelenis
            <br />
            Clone idea from{" "}
            <a
              href="https://preview.themeforest.net/item/mat-html-vcard-template/full_screen_preview/21062060?_ga=2.15130354.595278622.1624272199-1484030804.1611042440"
              target="_blank"
            >
              Mat - vCard & Resume Template
            </a>
          </Typography>
        </div>
      </div>
    );
}

export default Footer
