
import React, { Component } from 'react';
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />


        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
