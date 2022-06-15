import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../stylesheets/pages/developer.scss";

function Developer() {
  return (
    <div className="landing-warapper page-content">
      <div className="profile-oval">
        <img src="/assets/profile.png" alt="img" className="profile-image" />
      </div>
      <div className="landing-section">
        <div className="web-developer">Web Developer</div>
      </div>
      <div className="social-network">
        <a
          href="https://www.linkedin.com/in/narasimha-murthy-05570417a"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedInIcon className="social-media-icons" />
        </a>
        <a
          href="https://www.instagram.com/_murthy_majji_/"
          target="_blank"
          rel="noreferrer noopener"
        >   
          <InstagramIcon className="social-media-icons" />
        </a>
        <a
          href="https://www.facebook.com/naveen.murthy.56"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FacebookIcon className="social-media-icons" />
        </a>
        <a
          href="https://github.com/Naveen-Murthy"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHubIcon className="social-media-icons" />
        </a>
      </div>
    </div>
  );
}

export default Developer;
