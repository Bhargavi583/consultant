import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Services.css'; // You can style it however you'd like

const AboutCulture = () => {
  return (
    <div className="about-wrapper">
        <p>Services</p>
      <motion.h2 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Our Clients Give Us Drive
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Whether it’s finding the right candidate for a job or seamlessly managing a project end to end, our conviction and commitment to our clients runs deep. No matter what it takes, we’re devoted to fueling the success of your business.
      </motion.p>

      <motion.button 
        className="explore-button"
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5, delay: 0.4 }}
        onClick={() => alert("Navigate to culture page or section")}
      >
        see What We Can Do For You
      </motion.button>
    </div>
  );
};

export default AboutCulture;
