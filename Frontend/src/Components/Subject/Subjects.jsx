import React from 'react';
import '../../assets/CSS/Common.css';
import './Subjects.css';
import computer from '../../assets/Img/computer-icon.jpg';
import civil from '../../assets/Img/civil-icon.png';
import electrical from '../../assets/Img/electrial-icon.png';
import mechanical from '../../assets/Img/mechanical-icon.png';
import textile from '../../assets/Img/textile-icon.png';

function Subjects() {
  return (
    <div className='subjects'>
       <h1 className='text-center'>Our Subjects</h1>
       <div className="subject-content container">
            {
                department.map((element, index)=>{
                    const {img, title} = element;
                    return(
                        <div key={index} data-aos='zoom-in'>
                            <div className="subject-content-box transition rounded">
                                <img className='rounded' src={img} alt={`${title} department Darpon Polytechnic Institute (DPI)`} />
                                <h3 className='transition'>{title}</h3>
                            </div>
                        </div>
                    )
                })
            }
       </div>
    </div>
  )
}

export default Subjects;

const department = [
    {
        img : civil,
        title : "Civil"
    },
    {
        img : computer,
        title : "Computer"
    },
    {
        img : electrical,
        title : "Electrical"
    },
    {
        img : mechanical,
        title : "Mechanical"
    },
    {
        img : textile,
        title : "Textile"
    },
]