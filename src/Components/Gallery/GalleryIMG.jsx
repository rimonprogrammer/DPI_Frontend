import React from 'react';
import '../../assets/CSS/Common.css';
import './GalleryIMG.css';
import classParty from '../../assets/Gallery/class-Party-dpi.jpg';
import educationalTeacher from '../../assets/Gallery/Educational-tour-teacher-dpi.jpg';
import gardianDAY from '../../assets/Gallery/gardian-day-dpi.jpg';
import educationalStudent from '../../assets/Gallery/Educational-tour-students-dpi.jpg';
import NewArrival from '../../assets/Gallery/New arrival.jpg';
import february21 from '../../assets/Gallery/21 february-dpi.jpg';

function GalleryIMG() {

  return (
    <div className='container'>
        <h1 className='head-title gellary-head'>Our Gellary</h1>
        <div className="gallery">
            {
                gellary.map((image, index)=>{
                    const {img, description, fbURL} = image;

                    return(
                        <div key={index} data-aos='zoom-in' className="gallery-content">
                            <div className="gallery-content-box">
                                <div className='gallery-overflow transition'>
                                    <div className='gallery-overflow-social'>
                                        <a href={fbURL} target='_blank'><i className="transition fa-brands fa-square-facebook"></i></a>
                                        <a href={fbURL} target='_blank'><i className="transition fa-brands fa-square-youtube"></i></a>
                                    </div>
                                    <p>{description}</p>
                                </div>
                                <img src={img} alt={description}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default GalleryIMG;


const gellary = [
    {
        img : classParty,
        fbURL : "",
        youtubeURL : "",
        description : "Class party in 2021 with the season of 2017-18 at Darpon Polytechnic Institute"
    },
    {
        img : educationalTeacher,
        fbURL : "",
        youtubeURL : "",
        description : "Educational Tour with the all Student and Teacher, at Darpon Polytechnic Institute"
    },
    {
        img : gardianDAY,
        fbURL : "",
        youtubeURL : "",
        description : "Gardian DAY Celebration in 2018 at Darpon Polytechnic Institute"
    },
    {
        img : educationalStudent,
        fbURL : "",
        youtubeURL : "",
        description : "Educational Tour with the all Student at Darpon Polytechnic Institute"
    },
    {
        img : NewArrival,
        fbURL : "",
        youtubeURL : "",
        description : "New Arrival Celebration at Darpon Polytechnic Institute"
    },
    {
        img : february21,
        fbURL : "",
        youtubeURL : "",
        description : "21 February celebration at Darpon Polytechnic Institute"
    },
   
]