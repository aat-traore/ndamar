import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" footer-container">
      <div className="footer-about">
        <h2>About Us</h2>
        <Link to="/sign-up">How it works</Link>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus
          euismod, faucibus metus ut, sempe r nibh. Aenean euismod justo eu enim
          dapibus suscipit.
        </p>
      </div>
      <div className=" footer-contact">
        <h2>Contact Us</h2>
        <Link to="">Contact</Link>
        <Link to="">Support</Link>
      </div>
      <div className="footer-reseau">
        <h2>Reseaux Sociaux</h2>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin"></i>



      </div>
    </div>

    /*<div className="footer-container">
      <div className="footer-links">
        <div className="footer-links-wrapper">
          <div className="footer-about">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
              metus euismod, faucibus metus ut, sempe r nibh. Aenean euismod
              justo eu enim dapibus suscipit.
            </p>
          </div>
          <div className="footer-links-items">
            <h2>Contact Us</h2>
            <Link to="">Contact</Link>
            <Link to="">Support</Link>
          </div>
        </div>
        <div className="footer-links-wrapper">
          <div className="footer-links-items">
            <h2>Reference</h2>
            <Link to="">How it works</Link>
            
          </div>
          <div className="footer-links-items">
            <h2>Reseaux Sociaux</h2>
            <Link to="">Instagram</Link>
            
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              NDamar <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights">NDamar ® 2023</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="Linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  */
  );
};
export default Navbar;
