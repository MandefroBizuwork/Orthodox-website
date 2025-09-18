import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import LoginModal from "../../LoginModal";
import SignUpModal from "../../SignUpModal";
import "../../../Styles/Navbar.css";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Modals
  const [showSigninModal, setShowSignin] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  // Scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar-section ${showNavbar ? "show" : "hide"}`}
      role="navigation"
      aria-label="Main Navigation"
    >
      {/* Modals */}
      <LoginModal showModal={showSigninModal} onclose={() => setShowSignin(false)} />
      <SignUpModal showModal={showSignupModal} onclose={() => setShowSignupModal(false)} />

      {/* Logo */}
      <h1 className="navbar-title">
        <Link to="/">
        ኦርቶዶክስ ሰንበት ትምህርት ቤት <span className="navbar-sign">+</span>
        </Link>
      </h1>

      {/* Desktop Menu */}
      <ul className="navbar-items">
        <li><Link to="/" className="navbar-links">ቀዳሚ ገጽ</Link></li>
        <li><Link to="/Courses" className="navbar-links">ትምህርቶች</Link></li>
        <li><a href="#reviews" className="navbar-links">አዲስ መረጃዎች</a></li>
        <li><a href="#students" className="navbar-links">የተማሪዎች</a></li>
        <li><a href="#teachers" className="navbar-links">አስተማሪዎች</a></li>
        <li><a href="#admin" className="navbar-links">አስተዳዳሪዎች</a></li>
        <li><a href="#about" className="navbar-links">ስለኛ</a></li>
        {/* <li><a href="#contactus" className="navbar-links">ያግኙን</a></li> */}
        <li> <HashLink  className="navbar-links" smooth to="/#contactus">ያግኙን</HashLink></li>
      </ul>

      {/* Auth Buttons (Desktop) */}
      <div className="auth-buttons ms-auto">
        <Link onClick={() => setShowSignupModal(true)} className="navbar-links butns">ተመዝገብ</Link>
        <Link onClick={() => setShowSignin(true)} className="navbar-links butns">ግባ</Link>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <button onClick={() => setNav(false)} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </button>

        <ul className="mobile-navbar-links">
          <li><Link onClick={() => setNav(false)} to="/">ቀዳሚ ገጽ</Link></li>
          <li><Link onClick={() => setNav(false)} to="/Courses">ትምህርቶች</Link></li>
          <li><a onClick={() => setNav(false)} href="#about">ስለኛ</a></li>
          <li><a onClick={() => setNav(false)} href="#reviews">እይታ</a></li>
          <li><a onClick={() => setNav(false)} href="#contactus">ያግኙን</a></li>
          <li><Link onClick={() => { setNav(false); setShowSignupModal(true); }} className="butns">ተመዝገብ</Link></li>
          <li><Link onClick={() => { setNav(false); setShowSignin(true); }} className="butns">ግባ</Link></li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <button className="mobile-nav" onClick={() => setNav(true)}>
        <FontAwesomeIcon icon={faBars} className="hamb-icon" />
      </button>
    </nav>
  );
}

export default Navbar;
