import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Nav} from "react-bootstrap";
import {Link, NavLink, withRouter} from "react-router-dom";
import { WorkRoundedIcon, FacebookIcon, GithubIcon} from "@material-ui/icons";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import TelegramIcon from '@material-ui/icons/Telegram';
import resumeData from '../../utils/resumeData'
import CustomButton from '../Button/Button'
import './Header.css'

const Header = (props) => {
    const pathName= props?.location?.pathname
    return (
      <Navbar bg="light" expand="lg" className="header">
        {/* home link */}
        <Nav.Link as={NavLink} to="/" className="p-0 m-0">
          <Navbar.Brand className="header_home">
            <HomeRoundedIcon />
          </Navbar.Brand>
        </Nav.Link>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="header_left">
            <Nav.Link
              as={NavLink}
              to="/"
              className={pathName == "/" ? "header_link_active" : "header_link"}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/portfolio"
              className={
                pathName == "/portfolio" ? "header_link_active" : "header_link"
              }
            >
              Portfolio
            </Nav.Link>
          </Nav>
          <div className="header_right">
            {Object.keys(resumeData.socials).map((key) => (
              <a href={resumeData.socials[key].link} target="_blank">
                {resumeData.socials[key].icon}{" "}
              </a>
            ))}
          </div>
          <CustomButton text={"hire me too"} icon={<TelegramIcon />} />
        </Navbar.Collapse>
      </Navbar>
    );
}

export default withRouter(Header)
