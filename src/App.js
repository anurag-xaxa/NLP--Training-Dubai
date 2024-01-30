// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

//Routes
import About from './Components/AboutUs.js';
import CertifiedCoach from './Components/CertifiedCoach.js';
import EmotionalIntelligence from './Components/EmotionalIntelligence.js';
import CertifiedDiploma from './Components/CertifiedDiploma.js';
import CertifiedNlpMaster from './Components/CertifiedNlpMaster.js';
import AdvancedDiploma from './Components/AdvancedDiploma.js';
import CertifiedWellnessCoach from './Components/CertifiedWellnessCoach.js';
import CertifiedLifeCoaching from './Components/CertifiedLifeCoaching.js';
import InspiredMinds from './Components/InspiredMinds.js';
import CertifiedWellbeingCoach from './Components/CertifiedWellbeingCoach.js';
import Owl from './Components/Owl.js';

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
          <Route path="/owl" element={<Owl/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
