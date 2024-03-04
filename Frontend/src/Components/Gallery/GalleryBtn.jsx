import React from 'react';
import '../../assets/CSS/Common.css';
import '../../assets/CSS/TempBtn.css';
import { Link } from 'react-router-dom';

function GalleryBtn() {
  return (
    <div className='container'>
        <div className='d-flex justify-content-center my-5'>
            <Link to='/Gallery'>
                <button className='TempBtn rounded'>See All Picture</button>
            </Link>
        </div>
    </div>
  )
}

export default GalleryBtn