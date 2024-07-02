import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import AboutUs from './pages/AboutUs/AboutUs';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Admissions from './pages/Admissions/Admissions';
import ProfileBuilding from './pages/ProfileBuilding/ProfileBuilding';
import ContactUs from './pages/ContactUs/ContactUs';
import BookaSession from './pages/BookaSession/BookaSession';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path= "/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path='/admissions' element={<Admissions/>} />
          <Route path='/profile-building' element={<ProfileBuilding/>} />
          <Route path='/book-a-session' element={<BookaSession/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
