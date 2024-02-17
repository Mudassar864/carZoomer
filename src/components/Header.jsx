import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoCarOutline, IoPersonOutline } from "react-icons/io5";
export default function Header() {
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);
  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <header className={`header ${isHeaderActive ? "active" : ""}`}>
      <div className="container">
        <div
          className={`overlay ${isNavActive ? "active" : ""}`}
          onClick={() => setIsNavActive(false)}
        />
        <NavLink to="/" className="logo" onClick={() => setIsNavActive(false)}>
          CarZoomer
        </NavLink>
        <nav className={`navbar ${isNavActive ? "active" : ""}`} data-navbar="">
          <ul className="navbar-list">
            <li>
              <NavLink
                to="/"
                className="navbar-link"
                onClick={() => setIsNavActive(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="cars"
                className="navbar-link"
                onClick={() => setIsNavActive(false)}
              >
                Explore cars
              </NavLink>
            </li>
            <li>
              <NavLink
                to="blog"
                className="navbar-link"
                onClick={() => setIsNavActive(false)}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="favourite"
                className="navbar-link"
                onClick={() => setIsNavActive(false)}
              >
                Favourite
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <div className="header-contact">
            <a href="tel:88002345678" className="contact-link">
              8 800 234 56 78
            </a>
            <span className="contact-time">Mon - Sat: 9:00 am - 6:00 pm</span>
          </div>
          <Link
            to="cars"
            className="btn"
            aria-labelledby="aria-label-txt"
            onClick={() => setIsNavActive(false)}
          >
            <span id="aria-label-txt">Explore cars</span>
          </Link>
          <Link
            to="/"
            className="btn user-btn"
            aria-label="Profile"
            onClick={() => setIsNavActive(false)}
          >
            <IoPersonOutline size={"22"} />
          </Link>
          <button
            className={`nav-toggle-btn ${isNavActive ? "active" : ""}`}
            data-nav-toggle-btn=""
            aria-label="Toggle Menu"
            onClick={toggleNav}
          >
            <span className="one" />
            <span className="two" />
            <span className="three" />
          </button>
        </div>
      </div>
    </header>
  );
}
