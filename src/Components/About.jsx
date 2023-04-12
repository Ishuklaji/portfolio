import React from "react";
import AboutDiv from "../css/About.styled";
import { Fade } from "react-awesome-reveal";
// import Aboutme from "../assets/icons/aboutme.svg";
import AboutPic from "../assets/image/aboutPic.webp";
const About = () => {
  return (
    <AboutDiv id="about">
      <div className="conatainerAbout">
        {/* <div className="iconContainer"> */}
        <Fade direction="left" className="iconContainer">
          <img className="iconAboutMe" src={AboutPic} alt="" />
        </Fade>
        {/* </div> */}

        <div className="aboutDesc">
          <Fade direction="left">
            <h1 className="subTitle">About me</h1>
            <p className="desc">
              Full-Stack Web Developer with the ability to learn and collaborate
              in rapidly changing environments and compositions. Worked through
              1000+ hours of Bootcamp structure learning JavaScript, Node.Js,
              React.Js, Next.Js, MongoDB, Express, HTML5, CSS3, Java, C++.
            </p>
          </Fade>
        </div>
      </div>
    </AboutDiv>
  );
};

export default About;

