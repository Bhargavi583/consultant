import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

import Header from './components/Header';
import Slider from './components/Slider';
import HomeAbout from './components/HomeAbout';
import Services from './components/Services';
import ServicesContainer from './components/ServicesContainer';
import LatestNews from './components/LatestNews';
import Area from './components/Area';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import PopupForm from './components/PopupForm';
// import Service1 from './components/Service1.js';

function Home() {
  return (
    <>
      <PopupForm />
      <Slider />
      <HomeAbout />
      <Services />
      <ServicesContainer />
      <LatestNews />
      <Area />
      <Testimonial />
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        {/* Add more routes like these if needed */}
         <Route path="/about" element={<About />} /> 
        {/* <Route path="/service" element={<Service1 />} />  */}
          <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
