import React, { useState }from 'react';
import logo from '../ns-blue-logo.svg';
import { Link } from 'react-router-dom';

function NavBar () {

  const isMobile = window.innerWidth <= 768;

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleHamburger = () => {
    setShowMobileMenu(!showMobileMenu);
  }

  const handleMobileMenuClick = () => {
    setShowMobileMenu(false);
  }

  if (isMobile) {
    // Render mobile navbar with hamburger menu
    return (
      <>
        <nav className="mobile-navbar">
          <Link to="/">
            <img className='mobile-logo' src={logo} alt="logo" />
          </Link>
          <h1 className="mobile-title">neuroscope <span className='m-blue'>mobile</span></h1>
          <img className={`hamburger-menu-button ${showMobileMenu ? 'clicked' : ''}`} src='/svg/hamburger-menu.svg' onClick={handleHamburger}/>
        </nav>
        {showMobileMenu && (
          <div className={`hamburger-menu ${showMobileMenu ? 'expanded' : ''}`} onClick={handleMobileMenuClick}>
              <Link to="/brainexplorer" className='mobile-nav-link'><div className='hamburger-menu-item' onClick={handleMobileMenuClick}>Brain Explorer</div></Link>
              <Link to="/about" className='mobile-nav-link'><div className='hamburger-menu-item' onClick={handleMobileMenuClick}>About</div></Link>
              <Link to="/legal" className='mobile-nav-link'><div className='hamburger-menu-item' onClick={handleMobileMenuClick}>Legal</div></Link>
              <div className='hamburger-menu-bottom'></div>

          </div>
        )}
      </>
    );
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <h1 className="title">neuroscope</h1>
      <h4 className='version'>v.2</h4>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/brainexplorer" className='nav-link'>Brain Explorer</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className='nav-link'>About</Link>
        </li>
        <li className="nav-item">
          <Link to="/legal" className='nav-link'>Legal</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;