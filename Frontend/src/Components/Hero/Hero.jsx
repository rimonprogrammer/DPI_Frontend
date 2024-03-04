import React from 'react';
import './Hero.css';
import '../../assets/CSS/Common.css';
import heroImg from '../../assets/Img/Home-img.png';
import Typewriter from 'typewriter-effect';
import students from '../../assets/Img/students.png';
import teachers from '../../assets/Img/teacher.png';
import lab from '../../assets/Img/lab.png';
import CountUp from 'react-countup';
import { useThemeContext } from '../../ContextAPI/ThemeContext';
import { Link } from 'react-router-dom';

function Hero() {
const {theme, themeColor} = useThemeContext();

  return (
    <div className='hero' style={ theme ? theme : themeColor} id='Introduction'>
        <div className="container">
            {/* ---- row start ---- */}
            <div className="row">
                <div className="col-md-7 hero-content-section" data-aos='fade-right'> 
                    <div className="hero-content">
                        <h1 className='ThreeDEffect p-2 rounded-2'><span>Darpon</span> Polytechnic Institute</h1>
                        <h2 className='ThreeDEffect p-2 rounded-2'>70/1 Sir Iqbal Road, Courtpara, Kushtia</h2>
                        <div className="d-flex align-items-center ThreeDEffect p-2 rounded-2">
                            <h3 className='p-2'>Our Courses: </h3>
                            <h3 className='hero-courses ms-2'>
                                <Typewriter
                                    options={{
                                        autoStart : true,
                                        loop : true,
                                        delay : 40,
                                        strings : [
                                            "Computer",
                                            "Civil",
                                            "Electrical",
                                            "Mechanical",
                                            "Textile"
                                        ]
                                    }}
                                
                                />
                            </h3>
                        </div>
                        <p className='ThreeDEffect p-2 rounded-2 user-select-none'>প্রজন্মের দিকনির্দেশনা অঙ্গীকারবদ্ধ, শিক্ষা আলোর পথ যেন জ্বলতে থাকে সর্বদা, তাই আমরা শিক্ষার উজ্জ্বল পথে এবং সম্পূর্ণ নির্ভরযোগ্য ও বিশ্বস্ত পথে অগ্রসর করে যাচ্ছি একটি পরিপূর্ণ সমস্ত শিক্ষার প্রস্তুতি দেওয়ার জন্য।</p>
                    </div>
                    <a href="#Contact">
                        <button className='hero-Registration ThreeDEffect rounded-2 rounded transition'>Contact US</button>
                    </a>
                </div>
                {/* ----- column ending & starting ---- */}
                <div className="col-md-5 hero-img-section ThreeDEffect rounded-2">
                    <div data-aos='fade-left'>
                        <img className='transition' src={heroImg} alt="hero section image at Darpon Polytechnic Institute (DPI)" />
                    </div>
                </div>
            </div>
            {/* ---- row end ---- */}

            {/* ---- hero middle info section start ----- */}
            <div className="hero-middle" data-aos='zoom-in'>
                <div className="hero-middle-content rounded">
                    <div className="hero-middle-contentbox rounded">
                        <div className="hero-middle-top">
                            <Link to='/Students' style={ theme ? theme : themeColor} className='hero-middle-top-content rounded text-decoration-none'>
                                <img className='transition rounded' src={students} alt="students picture at Darpon Polytechnic Institute (DPI)" />
                                <div>
                                    <h4 className='transition student-number'><CountUp start={0} end={2000} duration={2} delay={0} /> +</h4>
                                    <p>Student</p>
                                </div>
                            </Link>
                            <Link to='/AllTeacher' style={ theme ? theme : themeColor} className='hero-middle-top-content rounded text-decoration-none'>
                                <img className='transition rounded' src={teachers} alt="teacher picture at Darpon Polytechnic Institute (DPI)" />
                                <div>
                                    <h4 className='transition'><CountUp start={0} end={20} duration={2} delay={0} /> +</h4>
                                    <p>Teacher</p>
                                </div>
                            </Link>
                            <Link to='/' style={ theme ? theme : themeColor} className='hero-middle-top-content rounded  text-decoration-none'>
                                <img className='transition rounded' src={lab} alt="lab picture Darpon at Polytechnic Institute (DPI)" />
                                <div>
                                    <h4 className='transition'><CountUp start={0} end={10} duration={2} delay={0} /> +</h4>
                                    <p>Digital Lab</p>
                                </div>
                            </Link>
                        </div>
                        <div style={ theme ? theme : themeColor} className="hero-middle-fotter">
                            <p className='user-select-none'>আমাদের প্রতিষ্ঠানের পরিচিতি দিয়ে শিক্ষার্থীদের মানসিক এবং সামাজিক উন্নয়ন করতে সর্বদা উদ্যমী হয়ে থাকি। প্রতিষ্ঠানের ভর্তি হওয়ার জন্য নিচের লিঙ্ক থেকে ফর্মটি পূরণ করুন এবং প্রতিষ্ঠানের পরিচিতি এবং সুযোগ-সুবিধা সম্পর্কে বিস্তারিত জানতে সর্বদা আমাদের সাথে যোগাযোগ করুন।</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---- hero middle info section end ----- */}
        </div>
    </div>
  )
}

export default Hero;
