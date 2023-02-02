import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <img src="./images/logo.svg" className="footer-logo" alt="logo" />

        <div className="social-footer">
          <img src="./images/telegram.svg" alt="telegram" />
          <img src="./images/instagram.svg" alt="instagram" />
          <img src="./images/twitter.svg" alt="twitter" />
        </div>
        <div className="footer_text1">
          {" "}
          &copy; 2022 Baker Industries Limited. All rights Reserved
        </div>
      </div>
      <div className="footer-inner">
        <Link to="/mint">
          <div className="footer_text2">Mint NFT</div>
        </Link>
        <Link to="/collections">
          <div className="footer_text2">Collections</div>
        </Link>

        <img
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
          className="up"
          src="./images/up.svg"
          alt="up"
        />
      </div>
    </div>
  );
}
