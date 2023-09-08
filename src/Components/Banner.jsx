import React, { useEffect, useState } from "react";
import BannerCon from "../css/Banner.styled";
import Typewriter from "typewriter-effect";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Avatar1 from "../assets/image/profilePic.jpeg";
import Avatar2 from "../assets/image/profilePic-2.jpeg";

import { SiGmail } from "react-icons/si";

const Banner = () => {
  return (
    <BannerCon>
      <div className="bannerContainer">
        <div className="typeWirter">
          <div className="introMyself">
            <p className="heading">Hi, I am Ish,</p>
            <div className="subHeading">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Web Developer !",
                    "Frontend Developer !",
                    "Backend Developer !",
                    "MERN Stack Developer",
                    "A tech enthusiast !",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 200,
                }}
              />
            </div>
            <p className="tagLine">
              An enthusiastic Full Stack Web Developer with a strong set of
              technical as well as non-technical skills and a dedication towards
              creating useful and interactive web applications.
            </p>
            <div className="typeButtons">
              <button className="learn-more">
                <a
                  href={
                    "https://drive.google.com/file/d/1amSettwRUTN5IrP-H_gTk5tEsFS3bA0X/view?usp=drivesdk"
                  }
                  target={"_blank"}
                >
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Resume</span>
                </a>
              </button>
            </div>
            <div className="socialIconContainer">
              <a
                href="https://www.linkedin.com/in/ish-b-shukla-016a34214"
                target={"_blank"}
              >
                <BsLinkedin className="socialIcons" />
              </a>
              <a href="https://github.com/Ishuklaji" target={"_blank"}>
                <BsGithub className="socialIcons" />
              </a>
              <a href="mailto:ishuklaji100@gmail.com" target={"_blank"}>
                <SiGmail className="socialIcons" />
              </a>
            </div>
          </div>
        </div>

        <div className="imageContainer">
          <img
            src={Avatar2}
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </BannerCon>
  );
};

export default Banner;
