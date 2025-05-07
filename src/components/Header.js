import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Header.css';

const Header = () => {
  return (
    <div>
        {/* <div className="background-danger">
           <div className='text-white'><img src="/search1.png" width="50px" height="50px" />
           </div>

           <div className='text-white header-contact'>
           
           <button className='text-black rounded'>Contact us</button>
           </div>
        </div> */}
         <nav className="navbar navbar-expand-lg custom-header navbar-dark">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="#">MyLogo</a>

        {/* Toggle for mobile */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"



          
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarContent">
          {/* Centered Menu Items */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <a className="nav-link" href="/Home">Home</a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                Services
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="#">Find a Job</a></li>
                <li><a className="dropdown-item" href="#">Find Talented Candidate</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">About Us</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact Us</a>
            </li>
          </ul>

          {/* Right Side Register Button */}
          <div className="d-none d-lg-block ms-auto">
            <a href="/service1" className="btn job-btn">Find A Job</a>
          </div>
          <div className="d-none d-lg-block ms-auto">
            <a href="#" className="btn register-btn">Hire A Talent</a>
          </div>
        </div>
      </div>
    </nav>
    </div>
   
  );
};

export default Header;
