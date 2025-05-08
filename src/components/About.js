import React from 'react';
import '../styles/About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PopupForm from './PopupForm';
const AboutUs = () => {
  return (
   
    <div className="about-page">
         <PopupForm />
      {/* Intro Section */}
      <section className="intro-section text-white text-center py-5">
        <div className="container">
          <h1>Empowering Students & Companies</h1>
          <p className="lead mt-3">
            Our platform connects job-seeking students with companies looking for skilled talent. We streamline hiring and job discovery for the future of work.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="founders-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Founders</h2>
          <div className="row text-center">
            <div className="col-md-6 mb-4">
              <img src="/About/owner1.jpg" alt="Founder 1" className="founder-img mb-3" />
              <h5>John Doe</h5>
              <p>CEO & Co-Founder</p>
            </div>
            <div className="col-md-6 mb-4">
              <img src="/About/owner2.jpg" alt="Founder 2" className="founder-img mb-3" />
              <h5>Jane Smith</h5>
              <p>COO & Co-Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h3>About Our Company</h3>
              <p>
                We're passionate about building career bridges between young professionals and companies. Our AI-driven job matching helps the right talent meet the right opportunity.
              </p>
            </div>
            <div className="col-md-6">
              <div className="video-container">
                <video width="100%" controls>
                  <source src="/assets/videos/company-intro.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
