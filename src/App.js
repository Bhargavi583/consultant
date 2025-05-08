import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AdminLogin from './components/AdminLogin'; // adjust path if needed

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
import Service1 from './components/Service1';
import Service2 from './components/Service2';
import Login from './components/AdminLogin';
import Dashboard from './components/Dashboard';
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
        <Route path="/" element={<Home />} />
        {/* Add more routes like these if needed */}
         <Route path="/about" element={<About />} /> 
        <Route path="/service2" element={<Service2 />} /> 
          <Route path="/service1" element={<Service1 />} />  
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/admin-login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
