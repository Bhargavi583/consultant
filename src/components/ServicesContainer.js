import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ServicesContainer.css';

const ServicesContainer = () => {
  return (
    <div className="container-wrapper">
      <motion.div 
        className="column"
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <h3>Find a Job</h3>
        <p>Explore opportunities that match your skills and ambitions. Start your next big move today.</p>
        <img 
          src="/services/job.png" 
          alt="Find a Job" 
          className="column-image" 
        />
      </motion.div>

      <motion.div 
        className="column"
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3>Hire a Talent</h3>
        <p>Access top tech professionals ready to drive results. Let us help you find the right match.</p>
        <img 
          src="/services/talent.png" 
          alt="Hire a Talent" 
          className="column-image" 
        />
      </motion.div>
    </div>
  );
};

export default ServicesContainer;
