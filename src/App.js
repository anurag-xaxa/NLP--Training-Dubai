// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

//Routes
import About from './Compnents/AboutUs';
import CertifiedCoach from './Compnents/CertifiedCoach.js';
import EmotionalIntelligence from './Compnents/EmotionalIntelligence.js';
import CertifiedDiploma from './Compnents/CertifiedDiploma.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/about-us" element={<About/>}></Route>
          <Route path="/certified-nlp-practitioner-coach" element={<CertifiedCoach/>}></Route>
          <Route path="/emotional-intelligence-coach-practitioner" element={<EmotionalIntelligence/>}></Route>
          <Route path="/certified-diploma-in-nlp-coaching" element={<CertifiedDiploma/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
