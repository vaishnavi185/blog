import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

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
                <Link to="#home">Home</Link>
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
            <a href="#facebook"><i class="fa-brands fa-facebook"></i></a>
            <a href="#instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="#twitter"><i class="fa-brands fa-twitter"></i></a>
          </div>
        </nav>
      </Router>
    </>
  );
}

export default Nav;
