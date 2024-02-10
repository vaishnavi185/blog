import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Import the necessary icons
import Home from './Home.jsx';
import './nav.css';

function Nav() {
  return (
    <>
      <Router>
        <nav className="navbar">
          <div className="logo">
            <h1>WBlog</h1>
          </div>

          <div className="nav-links">
            <ul>
              <li>
                <Link to="#HOME">Home</Link>
              </li>
              <li>
                <Link to="#product">Product</Link>
              </li>
              <li>
                <Link to="#service">Service</Link>
              </li>
              <li>
                <Link to="#about">About</Link>
              </li>
              <li>
                <Link to="#blog">Blog</Link>
              </li>
            </ul>
          </div>

          <div className="social-icons">
            <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} flip="horizontal" /></a>
            <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a> {/* Fixed this line */}
            <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a> {/* Fixed this line */}
          </div>
        </nav>
      </Router>
      <Home></Home>
      
    </>
  );
}

export default Nav;
