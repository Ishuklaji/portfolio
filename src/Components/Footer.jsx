import React from "react";
import FooterCon from "../css/Footer.styled";
import {
  SiLinkedin,
  SiGmail,
  SiGithub,
} from "react-icons/si";
import { Fade } from "react-awesome-reveal";
import { BsTelephoneFill } from "react-icons/bs";
const Footer = () => {
  return (
    <FooterCon id="footer">
      <h1 className="subTitle">Contact Me</h1>
      <div className="footerCon">
        <Fade direction="up">
          <div>
            <a
              href="https://www.linkedin.com/in/ish-b-shukla-016a34214"
              target={"_blank"}
              className="links"
            >
              <span>
                <SiLinkedin />
              </span>
              <span>Linkedin</span>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/Ishuklaji"
              target={"_blank"}
              className="links"
            >
              <span>
                <SiGithub />
              </span>
              <span>Github</span>
            </a>
          </div>
          <div>
            <a
             
              className="links"
              href="mailto:ishuklaji100@gmail.com"
              target={"_blank"}
            >
              <span>
                <SiGmail />
              </span>
              <span>ishuklaji100@gmail.com</span>
            </a>
          </div>
          <div>
            <p className="links disabled">
              <span>
                <BsTelephoneFill />
              </span>
              <span>+91 8076404575</span>
            </p>
          </div>
        </Fade>
      </div>
      <div className="credits">
        <p>
          Designed & Built by <span>Ish</span> © 2022
        </p>
      </div>
    </FooterCon>
  );
};

export default Footer;
