import React from 'react';
import Post from "./Post.jsx"
import './home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export default function home() {
  return (
    <>
    <div className='container'>
      <div className='text'>
        LIFESTYLE APRIL 04,
        <FontAwesomeIcon icon="fa-solid fa-forward-fast" style={{color: "#f2a982",}} />
        <h1>I shouted above </h1>
        <h1>the sudden noise</h1>

      </div>
      <div className='imgage'>
           
      </div>
      

      

    </div>
    <Post></Post>
    </>
  )
}
