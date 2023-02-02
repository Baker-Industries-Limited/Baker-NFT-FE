import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar({ toggle }) {
  return (
    <div className={toggle ? "sidebar animation1" : "sidebar animation2"}>
      <Link className="atag" to="/mint">
        <div className="side-item">Mint NFT</div>
      </Link>
      <Link className="atag" to="/collections">
        <div className="side-item">Collections</div>
      </Link>
    </div>
  );
}
