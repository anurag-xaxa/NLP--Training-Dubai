// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

//Routes
import About from './Compnents/AboutUs'
import CertifiedCoach from './Compnents/Certified-nlp-practitioner-coach'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/about-us" element={<About/>}></Route>
          <Route path="/certified-nlp-practitioner-coach" element={<CertifiedCoach/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
