import React from 'react';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import '../assets/CSS/Common.css';
function Error() {
  return (
    <>
      <Navbar/>
      <div className='error'>
          <p>UFF! You are lost!</p>
          <h1>404 ERROR</h1>
          <span>This page is not founded</span>
      </div>
      <Footer/>
    </>
  )
}

export default Error;