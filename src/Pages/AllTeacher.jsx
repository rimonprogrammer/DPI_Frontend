import React from 'react';
import Teachers from '../Components/Teacher/Teachers';
import '../Components/Teacher/Teachers.css';
import '../assets/CSS/Common.css';
import ferdows from'../assets/TeacherIMG/md-ferdows.png';
import jony from'../assets/TeacherIMG/sir.png';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';


function AllTeacher() {
  return (
    <>
        <Navbar/>
        <Teachers/>
        <div className="Teachers mt-4 my-5">
            {
                teachers.map((element, index)=>{
                    const {intro, img, name, description, fbURL, instagramURL, twitterURL} = element;

                    return(
                        <div key={index} className='Teachers-details'>
                            <div className='teacher-details-content'>
                                <div className="overflow">
                                    <div className='overflow-social'>
                                        <a href={fbURL} target='_blank'><i className="transition fa-brands fa-square-facebook"></i></a>
                                        <a href={instagramURL} target='_blank'><i className="transition fa-brands fa-square-instagram"></i></a>
                                        <a href={twitterURL} target='_blank'><i className="transition fa-brands fa-twitter"></i></a>
                                        <p>{intro}</p>
                                    </div>
                                </div>
                                <img src={img} alt="Darpon Polytechnic Institute (DPI)" />
                                <div className='content-details-box border-radius'>
                                    <h5>{name}</h5>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <Footer/>
    </>
  )
}

export default AllTeacher;


const teachers = [
    {
        img : ferdows,
        name : "MD Ferdows Ahammed",
        description : "Civil Department",
        intro : "Assalamualaikum, I am MD Enamul Hoque. I have Studied at Kushtia Government College and National University in Bangladesh",
        fbURL : "",
        instagramURL : "/",
        twitterURL : "/"
    },
    {
        img : jony,
        name : "xxxxxxxxxxxx",
        description : "Accounting",
        intro : "Assalamualaikum, I am MD Jony Sheikh. I have complete BA honours in Accountine from Kushtia Govt college in 2011.",
        fbURL : "/",
        instagramURL : "/",
        twitterURL : "/"
    },
    {
        img : jony,
        name : "xxxxxxxxxxxx",
        description : "Accounting",
        intro : "Assalamualaikum, I am MD Jony Sheikh. I have complete BA honours in Accountine from Kushtia Govt college in 2011.",
        fbURL : "/",
        instagramURL : "/",
        twitterURL : "/"
    },
]