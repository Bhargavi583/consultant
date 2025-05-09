import React, { useState } from 'react';
import '../styles/LatestNews.css';
import { motion } from 'framer-motion';
import '../styles/Services.css'; // You can style it however you'd like

const data = [
  {
    image: '/Tech/tech1.jpg',
    title: 'SEO',
    description: 'This is the description for Card 1.'
  },
  {
    image: '/Tech/tech2.jpg',
    title: 'Frontend Developer',
    description: 'This is the description for Card 2.'
  },
  {
    image: '/Tech/tech3.jpg',
    title: 'Digital Marketing',
    description: 'This is the description for Card 3.'
  },
  {
    image: '/Tech/tech4.jpg',
    title: 'Full Stack Developer',
    description: 'This is the description for Card 4.'
  },
  {
    image: '/Tech/tech5.jpg',
    title: 'UI UX Developer',
    description: 'This is the description for Card 5.'
  },
];

function Area() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = data.slice(startIndex, startIndex + 3);

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex + 3 < data.length) setStartIndex(startIndex + 1);
  };

  return (
    <div>

<div className="about-wrapper">
        <p>Our Area Experts</p>
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
        
         <div className="carousel-container">
       
       <button className="arrow" onClick={handlePrev} disabled={startIndex === 0}>
         &#8592;
       </button>
        
       <div className="card-row">
        
         {visibleCards.map((item, index) => (
           <div className="card" key={index}>
             <img src={item.image} alt={item.title} />
             <h3>{item.title}</h3>
             <p>{item.description}</p>
             <button className="read-more">Read More</button>
           </div>
         ))}
       </div>
 
       <button className="arrow" onClick={handleNext} disabled={startIndex + 3 >= data.length}>
         &#8594;
       </button>
     </div>
    </div>
  
  );
}

export default Area;
