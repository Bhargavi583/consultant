import React, { useState, useEffect } from 'react';
import '../styles/Testimonial.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Software Engineer',
    text: 'This service is amazing! Highly recommend it.',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Product Manager',
    text: 'A game-changer for our team. Excellent support.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    role: 'Designer',
    text: 'Creative solutions that exceeded our expectations.',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: 4,
    name: 'Bob Brown',
    role: 'Developer',
    text: 'Streamlined our workflow significantly. Great tool.',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    id: 5,
    name: 'Charlie Davis',
    role: 'CEO',
    text: 'Incredible value for the price. Will continue using.',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 6,
    name: 'Diana Evans',
    role: 'Marketing Lead',
    text: 'Enhanced our marketing efforts with ease.',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    id: 7,
    name: 'Ethan Foster',
    role: 'Data Analyst',
    text: 'Powerful analytics that drive decisions.',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    id: 8,
    name: 'Fay Garcia',
    role: 'HR Specialist',
    text: 'Simplified our recruitment process immensely.',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  {
    id: 9,
    name: 'George Harris',
    role: 'Operations Manager',
    text: 'Optimized our operations effectively.',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    id: 10,
    name: 'Hannah Irwin',
    role: 'Sales Director',
    text: 'Boosted our sales with innovative features.',
    image: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(autoSlide);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <div className="testimonial-wrapper d-flex align-items-center justify-content-center">
      <div className="testimonial-box text-center p-4">
        <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
        <p className="testimonial-text">"{testimonial.text}"</p>
        <h5 className="testimonial-name">{testimonial.name}</h5>
        <p className="testimonial-role">{testimonial.role}</p>
        <div className="testimonial-arrows">
          <button onClick={handlePrev} className="arrow-btn me-3">
            <i className="fas fa-arrow-left"></i>
          </button>
          <button onClick={handleNext} className="arrow-btn ms-3">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
