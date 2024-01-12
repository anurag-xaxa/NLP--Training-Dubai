// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

//Routes
import About from './Compnents/AboutUs'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/about-us" element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
