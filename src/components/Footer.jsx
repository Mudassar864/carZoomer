import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="logo">
              CarZoomer
            </Link>
            <p className="footer-text">
              Search for cheap rental cars in New York. With a diverse fleet of
              19,000 vehicles, Waydex offers its consumers an attractive and fun
              selection.
            </p>
          </div>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Company</p>
            </li>
            <li>
              <Link to="#" className="footer-link">
                About us
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Pricing plans
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Our blog
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Contacts
              </Link>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Support</p>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Help center
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Ask a question
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Terms &amp; conditions
              </Link>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Neighborhoods in New York</p>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Manhattan
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Central New York City
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Upper East Side
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Queens
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Theater District
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Midtown
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                SoHo
              </Link>
            </li>
            <li>
              <Link to="#" className="footer-link">
                Chelsea
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <ul className="social-list">
            <li>
              <Link to="#" className="social-link">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link to="#" className="social-link">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link to="#" className="social-link">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link to="#" className="social-link">
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link to="#" className="social-link">
                <FaSkype />
              </Link>
            </li>
            <li>
              <Link to="#" className="social-link">
                <CiMail />
              </Link>
            </li>
          </ul>
          <p className="copyright">
            © 2024 <Link to="#">Mudassar Manzoor</Link>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
