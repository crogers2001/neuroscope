import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import logo from './ns-blue-logo.svg'
import BrainExplorer from './components/BrainExplorer'
import Home from './components/Home';
import About from './components/About';
import Legal from './components/Legal';

function App() {

  //find a way to reset user's viewport to top of page each time they navigate to different link
  
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/brainexplorer" element={<BrainExplorer/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/legal' element={<Legal/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
