import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HomeAbout.css'; // You can style it however you'd like
import { useNavigate } from 'react-router-dom';

const AboutCulture = () => {
  const navigate = useNavigate();

  return (
    <div className='latest-news'>
       <div className="about-wrapper">
        <p>About</p>
      <motion.h2 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Our Culture Shapes Everything We Do
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Our people, clients, and consultants matter to us more than anything. We are driven by a culture of purpose, shared values, and growth. See who we are and how we roll. It’s pretty unique.
      </motion.p>

      <motion.button 
        className="explore-button"
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5, delay: 0.4 }}
        onClick={() => navigate('/about')}
      >
        Explore Our Culture
      </motion.button>
     
    </div>
        {/* <div className="image-container">
      <img
        src="/about.jpg"
        alt="Example"
        className="animated-image"
      />
    </div>  */}
    </div>
   
  );
};

export default AboutCulture;
