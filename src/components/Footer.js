import React from 'react';
import '../styles/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
      <footer className="footer bg-dark text-white pt-5 pb-3">
        <div className="container">
          <div className="row text-center text-md-start">
            {/* Logo */}
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <img src="/logo192.png" alt="Logo" className="footer-logo mb-2" />
              <p>Your trusted platform for modern web services and solutions.</p>
            </div>
  
            {/* Features/Links */}
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <h5>Features</h5>
              <ul className="list-unstyled">
                <li><a href="#job">Find a Job</a></li>
                <li><a href="#hire">Hire Talent</a></li>
                <li><a href="#support">Support</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
  
            {/* Address */}
            <div className="col-12 col-md-4">
              <h5>Address</h5>
              <p>
                123 Web Street<br />
                Innovation City, IN 45678<br />
                contact@example.com<br />
                +1 (555) 123-4567
              </p>
            </div>
          </div>
  
          {/* Privacy & Terms */}
          <div className="row mt-4 text-center">
            <div className="col-12">
              <a href="#privacy" className="me-3">Privacy Policy</a>
              <a href="#terms">Terms & Conditions</a>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="row mt-2 text-center">
            <div className="col-12">
              <small>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</small>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  

export default Footer;
