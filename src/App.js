// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

//Routes
import About from './Compnents/AboutUs';
import CertifiedCoach from './Compnents/CertifiedCoach.js';
import EmotionalIntelligence from './Compnents/EmotionalIntelligence.js';
import CertifiedDiploma from './Compnents/CertifiedDiploma.js';
import CertifiedNlpMaster from './Compnents/CertifiedNlpMaster.js';
import AdvancedDiploma from './Compnents/AdvancedDiploma.js';
import CertifiedWellnessCoach from './Compnents/CertifiedWellnessCoach.js';
import CertifiedLifeCoaching from './Compnents/CertifiedLifeCoaching.js';
import InspiredMinds from './Compnents/InspiredMinds.js';
import CertifiedWellbeingCoach from './Compnents/CertifiedWellbeingCoach.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/about-us" element={<About/>}></Route>
          <Route path="/certified-nlp-practitioner-coach" element={<CertifiedCoach/>}></Route>
          <Route path="/emotional-intelligence-coach-practitioner" element={<EmotionalIntelligence/>}></Route>
          <Route path="/certified-diploma-in-nlp-coaching" element={<CertifiedDiploma/>}></Route>
          <Route path="/certified-nlp-master-practitioner" element={<CertifiedNlpMaster/>}></Route>
          <Route path="/advanced-diploma-in-nlp-coaching" element={<AdvancedDiploma/>}></Route>
          <Route path="/certified-wellness-coach" element={<CertifiedWellnessCoach/>}></Route>
          <Route path="/certified-life-coaching" element={<CertifiedLifeCoaching/>}></Route>
          <Route path="/yes-to-inspired-minds" element={<InspiredMinds/>}></Route>
          <Route path="/certified-wellbeing-coach" element={<CertifiedWellbeingCoach/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
