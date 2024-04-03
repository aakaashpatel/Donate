import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaSquareXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src="./logo.png" alt="logo" />
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>Noida , India</li>
          <li>Noida@gmail.com</li>
          <li>+91 8809273405</li>
        </ul>
      </div>
      <div>
        <h4>Pages</h4>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
            <Link to={"/donate"}>Donate</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Follow Us</h4>
        <ul>
          <li>
            <Link to={"/"}>
              <span>
                <FaSquareXTwitter />
              </span>
              <span>Twitter</span>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <span>
                <FaYoutube />
              </span>
              <span>Youtube</span>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <span>
                <FaInstagram />
              </span>
              <span>Instagram</span>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <span>
                <FaLinkedinIn />
              </span>
              <span>LinkedIn</span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
