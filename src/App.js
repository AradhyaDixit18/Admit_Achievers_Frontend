import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import AboutUs from './pages/AboutUs/AboutUs';
import Contacts from './pages/ContactUs/ContactUs';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Admissions from './pages/Admissions/Admissions';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path='/admissions' element={<Admissions/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
