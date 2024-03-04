import React from 'react';
import './Campus.css';
import '../../assets/CSS/Common.css';
import firstCampus from '../../assets/Img/first-campus.png';
import secondCampus from '../../assets/Img/second-campus.png';
import computerLab from '../../assets/Img/computer-lab-dpi.jpg';
import electricalLab from '../../assets/Img/electrical-lab.jpg';
import mechanicalLab from '../../assets/Img/mechanical-lab.jpg';
import classRoom from '../../assets/Img/class-room.jpg';

function Campus() {
  return (
    <div className='campus'>
        <div className="container">
            <h1 className='head-title campus-title'>Our Campus & Class Room</h1>
            <div className="compus-image d-flex justify-content-center">
                {
                    campus.map((carousel, index)=>{
                        const {img, department} = carousel;
                        return(
                            <div data-aos='zoom-in' key={index} className='campus-content position-relative'>
                                <div className='overflow rounded transition'>
                                    <div className="campus-social text-light rounded ">
                                        <h5>{department}</h5>
                                    </div>
                                </div>
                                <img className='rounded w-100 h-100' src={img} alt={`${department} image, (DPI)`}/>
                                <div className='contact-details-content'>
                                    <div className='content-details-box rounded campus-text-box'>
                                        <h5>{department}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Campus;


const campus = [
    {
        img : firstCampus,
        department : "First Campus of Darpon Polytechnic Institute"
    },
    {
        img : secondCampus,
        department : "Secound Campus Darpon Polytechnic Institute"
    },
    {
        img : computerLab,
        department : "Computer Lab Darpon Polytechnic Institute",
    },
    {
        img : electricalLab,
        department : "Electrical Lab Darpon Polytechnic Institute",
    },
    {
        img : mechanicalLab,
        department : "Mechanical Lab Darpon Polytechnic Institute",
    },
    {
        img : classRoom,
        department : "Class Room Darpon Polytechnic Institute",
    },
];






   {/* <div className="carousel slide" id='CarouselID' data-bs-ride='carousel'>
                <div className="carousel-indicators">
                    <button data-bs-target='#CarouselID' data-bs-slide-to='0' aria-label='slide 1' className='active'></button>
                    <button data-bs-target='#CarouselID' data-bs-slide-to='1' aria-label='slide 2'></button>
                    <button data-bs-target='#CarouselID' data-bs-slide-to='2' aria-label='slide 3'></button>
                    <button data-bs-target='#CarouselID' data-bs-slide-to='3' aria-label='slide 4'></button>
                </div>
                <div className="carousel-inner rounded campus-carousel-inner">
                    {
                        campus.map((carousel, index)=>{
                            const {img, active} = carousel;
                            return(
                                <div key={index} className={`carousel-item ${active} campus-carousel-item`}>
                                    <img className='rounded' src={img} alt="campus image at Darpon Polytechnic Institute (DPI)" />
                                </div>
                            )
                        })
                    }
                </div>
                <button className='carousel-control-prev campus-carousel-icon-box' data-bs-target='#CarouselID' data-bs-slide='prev'>
                    <span className='rounded carousel-control-prev-icon campus-carousel-icon'  aria-hidden='true'></span>
                </button>
                <button className='carousel-control-next campus-carousel-icon-box' data-bs-target='#CarouselID' data-bs-slide='next'>
                    <span className='rounded carousel-control-next-icon campus-carousel-icon'  aria-hidden='true'></span>
                </button>
            </div> */}