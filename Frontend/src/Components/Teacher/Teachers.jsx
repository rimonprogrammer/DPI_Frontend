import React from 'react';
import '../../assets/CSS/Common.css';
import './Teachers.css';
import enamul from'../../assets/TeacherIMG/Enamul-hok.png';
import jony from'../../assets/TeacherIMG/joni-islam.png';
import rakibul from'../../assets/TeacherIMG/Rakibul-Islam.png';
import imran from'../../assets/TeacherIMG/Imran-Mahmud.png';
import Turjo from'../../assets/TeacherIMG/Turjo-Sheikh.png';
import Tipu from'../../assets/TeacherIMG/Tipu-Sultan.png';
import puja from'../../assets/TeacherIMG/puja-khatun.png';
import Rony from'../../assets/TeacherIMG/Rony-Ahammed.png';
import Jasim from'../../assets/TeacherIMG/Jasim-Uddin.png';

function Teachers() {
  return (
    <div className='container'>
        <h1 className='head-title'>Our Experience Instructors</h1>
        <div className="Teachers mt-4">
            {
                teachers.map((element, index)=>{
                    const {intro, img, name, description, fbURL, instagramURL, twitterURL, linkedInURL} = element;

                    return(
                        <div key={index} data-aos='zoom-in' className='Teachers-details'>
                            <div className='teacher-details-content'>
                                <div className="overflow">
                                    <div className='overflow-social'>
                                        <div className='overflow-social-icon'>
                                            <a href={linkedInURL} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                                            <a href={fbURL} target='_blank'><i className="transition fa-brands fa-square-facebook"></i></a>
                                            <a href={instagramURL} target='_blank'><i className="transition fa-brands fa-square-instagram"></i></a>
                                            <a href={twitterURL} target='_blank'><i className="transition fa-brands fa-twitter"></i></a>
                                            </div>
                                        <p>{intro}</p>
                                    </div>
                                </div>
                                <img src={img} alt="Darpon Polytechnic Institute (DPI)" />
                                <div className='contact-details-content'>
                                    <div className='content-details-box rounded'>
                                        <h5>{name}</h5>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Teachers;

const teachers = [
    {
        img : enamul,
        name : "MD Enamul Hoque",
        description : "Bangla",
        phone : "",
        email : "enamulhq2022@gmail.com",
        intro : "Assalamualaikum, I am MD Enamul Hoque. I have Studied at Kushtia Government College and National University in Bangladesh",
        fbURL : "https://www.facebook.com/Enamulhq2022",
        instagramURL : "/",
        twitterURL : "/",
        linkedInURL : "https://www.linkedin.com/in/enamul-haque-182a25242/"
    },
    {
        img : jony,
        name : "MD Jony Sheikh",
        description : "Accounting",
        phone : "",
        email : "enamulhq2022@gmail.com",
        intro : "Assalamualaikum, I am MD Jony Sheikh. I have complete BA honours in Accountine from Kushtia Govt college.",
        fbURL : "/",
        instagramURL : "/",
        twitterURL : "/",
        linkedInURL : ""
    },
    {
        img : rakibul,
        name : "MD Rakibul Islam",
        description : "English",
        phone : "",
        email : "enamulhq2022@gmail.com",
        intro : "Assalamualaikum, I am MD Rakibul Islam. I have complete Master of Business Administration at Kustia Vovernment College in 2018",
        fbURL : "https://www.facebook.com/rakibulislam.onurag",
        instagramURL : "/",
        twitterURL : "/",
        linkedInURL : ""
    },
    {
        img : imran,
        name : "MD Imran Mahmud",
        description : "Computer Department",
        phone : "",
        email : "enamulhq2022@gmail.com",
        intro : "Assalamualaikum, I am MD Imran Mahmud. I have complete Diploma in Computer Science and Technology from Kushtia polytechnic in 2018.",
        fbURL : "https://www.facebook.com/tanvir.mahmud.370515",
        instagramURL : "/",
        twitterURL : "/"
    },
    {
        img : Turjo,
        name : "MD Turjo Sheikh",
        description : "Computer Department",
        phone : "",
        email : "enamulhq2022@gmail.com",
        intro : "Assalamualaikum, I am MD Turjo Sheikh. I have complete Diploma in Computer Science and Technology from Kushtia polytechnic.",
        fbURL : "https://www.facebook.com/turjo.joadder123",
        instagramURL : "/",
        twitterURL : "/",
        linkedInURL : ""
    },
    {
        img : Tipu,
        name : "MD Tipu Sultan",
        description : "Electrical Department",
        intro : "Assalamualaikum, I am MD Tipu Sultan. I have complete Diploma in Electrical Engineering from  Kushtia polytechnic Institute.",
        fbURL : "https://www.facebook.com/md.tipusultan.144181",
        instagramURL : "/",
        twitterURL : "/"
    },
    {
        img : puja,
        name : "MST Puja Khatun",
        description : "Electrical Department",
        phone : "",
        email : "enamulhq2022@gmail.com",
        intro : "Assalamualaikum, I am MST Puja Khatun. I have complete Diploma in Electrical Engineering from  Kushtia polytechnic Institute.",
        fbURL : "/",
        instagramURL : "/",
        twitterURL : "/",
        linkedInURL : ""
    },
    {
        img : Rony,
        name : "MD Rony Sheikh",
        description : "Textile Department",
        intro : "Assalamualaikum, I am MD Rony Sheikh. I have complete Diploma in Textile Engineering from Kushtia polytechnic Institute.",
        fbURL : "https://www.facebook.com/ronyahmed.ronyahmed.52",
        instagramURL : "/",
        twitterURL : "/",
        linkedInURL : ""
    },
    {
        img : Jasim,
        name : "MD Jasim-Uddin",
        description : "Civil Department",
        phone : "",
        email : "enamulhq2022@gmail.com",
        intro : "Assalamualaikum, I am MD Jasim-Uddin. I have complete Diploma in Civil Engineering from Kushtia polytechnic Institute.",
        fbURL : "https://www.facebook.com/md.jasimuddin.758737",
        instagramURL : "/",
        twitterURL : "/",
        linkedInURL : ""
    },
]