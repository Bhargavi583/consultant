import React from 'react';
import '../styles/Contact.css';
import PopupForm from './PopupForm';

const Contact = () => {
  return (
    <div className="contact-page">
                 <PopupForm />

      {/* Intro Section */}
      <section className="contact-intro text-white text-center py-5" data-aos="fade-down">
        <div className="container">
          <h1 className='text-black'>Contact Us</h1>
          <p className="lead text-black">We help students find jobs and companies find top talent.</p>
        </div>
      </section>

      {/* Student Registration Form */}
      <section className="contact-form py-5" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-4">Student Registration</h2>
          <form className="row g-3">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Full Name" required />
            </div>
            <div className="col-md-6">
              <input type="email" className="form-control" placeholder="Email" required />
            </div>
            <div className="col-md-12">
              <input type="text" className="form-control" placeholder="Skills/Field of Interest" />
            </div>
            <div className="col-md-12">
              <textarea className="form-control" rows="4" placeholder="Tell us more about your goals"></textarea>
            </div>
            <div className="col-md-12 text-center">
              <button type="submit" className="btn btn-light px-5">Register</button>
            </div>
          </form>
        </div>
      </section>

      {/* Company Contact Form */}
      <section className="company-inquiry py-5 bg-dark text-white" data-aos="fade-up">
        <div className="container">
          <h2 className="text-center mb-4">Company Inquiry</h2>
          <form className="row g-3">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Company Name" required />
            </div>
            <div className="col-md-6">
              <input type="email" className="form-control" placeholder="Contact Email" required />
            </div>
            <div className="col-md-12">
              <textarea className="form-control" rows="4" placeholder="What talent are you looking for?" required></textarea>
            </div>
            <div className="col-md-12 text-center">
              <button type="submit" className="btn btn-outline-light px-5">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
