import React from 'react';
import LoaderImg from '../assets/Img/loader.gif';
import '../assets/CSS/Common.css';

function Loader() {
  return (
    <div>
        <img className='loader' src={LoaderImg} alt="Loader" />
    </div>
  )
}

export default Loader;