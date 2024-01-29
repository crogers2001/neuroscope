import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import logo from './ns-blue-logo.svg'
import NavBar from './components/NavBar';
import BrainExplorer from './components/BrainExplorer'
import Home from './components/Home';
import About from './components/About';
import Legal from './components/Legal';

function App() {

  // if(isMobile) {
  //   return (
  //     <div className="sorry">
  //       <img src={logo} alt="Website Logo" />
  //       <h1>Mobile access is currently not supported, sorry!</h1>
  //     </div>
  //   );
  // }
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
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
