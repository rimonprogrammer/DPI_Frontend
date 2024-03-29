import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

function AddGellary() {
  return (
    <>
        <Navbar/>
          <div className="container">
              <h4 className='mt-2'>
                  <Link to='/' className='text-decoration-none  fw-bold'>Home</Link> /Add Gallery
              </h4>
          </div>
          <Footer/>
    </>
  )
}

export default AddGellary;