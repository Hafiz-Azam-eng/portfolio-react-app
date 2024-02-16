import React from "react";
import "./Menus.css";
// import Zoom from "react-reveal/Zoom";
// import Fade from "react-reveal/Fade";
import { Link as ScrollLink } from "react-scroll"; 
import { Link as RouterLink } from "react-router-dom";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          {/* <Zoom> */}
            <div className="navbar-profile-pic">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                alt="profile pic"
              />
            </div>
          {/* </Zoom> */}
          {/* <Fade left> */}
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <RouterLink
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome />
                    Home
                  </RouterLink>
                </div>
                <div className="nav-link">
                  <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </ScrollLink>
                </div>
                <div className="nav-link">
                  <ScrollLink
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcReadingEbook />
                    Education
                  </ScrollLink>
                </div>

                <div className="nav-link">
                  <ScrollLink
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBiotech />
                    Tech Stack
                  </ScrollLink>
                </div>

                <div className="nav-link">
                  <ScrollLink
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcVideoProjector />
                    Projects
                  </ScrollLink>
                </div>
                <div className="nav-link">
                  <ScrollLink
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcPortraitMode />
                    Work Experince
                  </ScrollLink>
                </div>
                <div className="nav-link">
                  <ScrollLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBusinessContact />
                    Contact
                  </ScrollLink>
                </div>
              </div>
            </div>
          {/* </Fade> */}
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                </ScrollLink>
              </div>
              <div className="nav-link">
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout />
                </ScrollLink>
              </div>
              <div className="nav-link">
                <ScrollLink
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcReadingEbook />
                </ScrollLink>
              </div>

              <div className="nav-link">
                <ScrollLink
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiotech />
                </ScrollLink>
              </div>

              <div className="nav-link">
                <ScrollLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcVideoProjector />
                </ScrollLink>
              </div>
              <div className="nav-link">
                <ScrollLink
                  to="work"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcPortraitMode />
                </ScrollLink>
              </div>
              <div className="nav-link">
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact />
                </ScrollLink>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
