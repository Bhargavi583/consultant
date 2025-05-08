import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked on mobile
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-header navbar-dark">
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand" to="/">MyLogo</Link>

          {/* Toggle for mobile */}
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded={isMenuOpen ? 'true' : 'false'} // Control the expanded state
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu open/close
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible content */}
          <div className={`collapse navbar-collapse justify-content-center ${isMenuOpen ? 'show' : ''}`} id="navbarContent">
            {/* Centered Menu Items */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={handleMenuClick}>Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown">
                  Services
                </Link>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><Link className="dropdown-item" to="/service1" onClick={handleMenuClick}>Find a Job</Link></li>
                  <li><Link className="dropdown-item" to="/service2" onClick={handleMenuClick}>Find Talented Candidate</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={handleMenuClick}>About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={handleMenuClick}>Contact Us</Link>
              </li>
              {/* Mobile view Admin Login */}
              <li className="nav-item d-lg-none">
                <Link className="nav-link btn btn-outline-light mt-2" to="/admin-login" onClick={handleMenuClick}>Admin Login</Link>
              </li>
            </ul>

            {/* Right Side Register Buttons - Desktop view */}
            <div className="d-none d-lg-flex ms-auto gap-2">
              <Link to="/service1" className="btn register-btn nav-link">Find A Job</Link>
              <Link to="/service2" className="btn register-btn nav-link">Hire A Talent</Link>
              <Link to="/admin-login" className="btn register-btn nav-link text-white">Admin Login</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
