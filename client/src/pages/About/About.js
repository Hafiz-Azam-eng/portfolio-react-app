import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import img from "../../images/profileimg.jpg"
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-4 col-xl-4 col-lg-6 col-xs-12 about-img">
              <img
                src={img}
                alt="profile_pic"
              />
            </div>
            <div className="col-md-8 col-xl-8 col-lg-8 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Highly skilled and results-driven Software Engineer with professional experience designing, developing, and implementing cutting-edge software solutions. Adept at leveraging technical expertise to drive project success and enhance overall efficiency. Proven ability to collaborate with cross-functional teams and adapt to evolving industry trends. Committed to continuous learning and staying at the forefront of emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
