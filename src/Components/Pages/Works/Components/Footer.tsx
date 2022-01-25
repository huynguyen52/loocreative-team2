import React from "react";
import logo from "../../../../Assets/Images/Works/logo.png";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <a href="/" aria-current="page">
        <img src={logo} alt="LOOCREATIVE" />
      </a>
      <a href="https://vimeo.com/loocreative" target="_blank" rel="noreferrer">
        VIMEO
      </a>
      <a
        href="https://www.instagram.com/loocreative/"
        target="_blank"
        rel="noreferrer"
      >
        YOUTUBE
      </a>
      <a
        href="https://www.instagram.com/loocreative/"
        target="_blank"
        rel="noreferrer"
      >
        INSTAGRAM
      </a>
      <a
        href="https://www.facebook.com/loocreativeinc-110670107091286/"
        target="_blank"
        rel="noreferrer"
      >
        FACEBOOK
      </a>
    </div>
  );
};

export default Footer;
