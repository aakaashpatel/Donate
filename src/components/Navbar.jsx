import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBitcoin, FaSquareGithub, FaYoutube } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setshow] = useState(false);
  return (
    <nav className={show ? "navbar navbar_show" : "navbar"}>
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
            <Link to={"/donate"}>Donate Us</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={"/"}>
              <FaBitcoin />
            </Link>
            <Link to={"/"}>
              <FaYoutube />
            </Link>
            <Link to={"/"}>
              <FaSquareGithub />
            </Link>
            <Link to={"/"}>
              <BsInstagram />
            </Link>
          </li>
        </ul>
      </div>
      <GiHamburgerMenu className="hamburger" onClick={() => setshow(!show)} />
    </nav>
  );
};

export default Navbar;
