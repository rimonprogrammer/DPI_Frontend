import React, { useState } from 'react';
import '../../assets/CSS/Common.css';
import './Footer.css';
import dpiLogo from '../../assets/Img/dpi-logo.png';
import { useThemeContext } from '../../ContextAPI/ThemeContext';
import { Link } from 'react-router-dom';

function Footer() {
    const {theme, TextColor, themeColor} = useThemeContext();

    const date = new Date();
    const year = date.getFullYear();

    // ---------- return button displaying --------------
    const [returnBtn, setReturnBtn] = useState({
        display : 'none'
    });
    const returnBtns = () =>{
        if(window.scrollY >= 500){
            setReturnBtn({display : 'block'});
        }
        else{
            setReturnBtn({display : 'none'});
        }
    }
    document.addEventListener('scroll', returnBtns);
    // ---------- return button displaying --------------

  return (
    <footer>
        <div style={ theme ? theme : themeColor} className="footer-top position-relative">
            <div className="footer-overflow"></div>
        </div>
        <div style={ theme ? theme : themeColor} className='footer text-light d-flex justify-content-center align-items-center position-relative'>
            <div className="container">
                <a style={returnBtn} href="#header"><button className='btn btn-danger return-back-btn'><i className="fa-solid fa-arrow-up-from-bracket"></i></button></a>
                <div className="row">
                    <div className='footer-intro col-lg-3'>
                        <Link to='/' className='footer-logo d-flex text-decoration-none'>
                            <img className='rounded' src={dpiLogo} alt="" />
                            <h2>Darpon Polytechnic Institute</h2>
                        </Link>
                        <p className='user-select-none pt-3'>শিক্ষা আলোর পথ যেন জ্বলতে থাকে সর্বদা.., তাই আমরা শিক্ষার উজ্জ্বল পথে অগ্রসর করে যাচ্ছি । আমরা সম্পূর্ণ নির্ভরযোগ্য ও বিশ্বস্ত পথে অগ্রসর করে যাচ্ছি একটি পরিপূর্ণ সমস্ত শিক্ষার প্রস্তুতি দেওয়ার জন্য।</p>
                    </div>
                    <div className='footer-menu col-lg-3'>
                        <h4 style={TextColor}>Menu</h4>
                        <ul>
                            <li><a style={TextColor} className='transition' href="#Introduction">Introduction</a></li>
                            <li><a style={TextColor} className='transition' href="#notice">Notice</a></li>
                            <li><a style={TextColor} className='transition' href="#Opportunities">Opportunities</a></li>
                            <li><a style={TextColor} className='transition' href="#FAQ">FAQ</a></li>
                            <li><a style={TextColor} className='transition' href="#Contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className='footer-service col-lg-3'>
                        <h4 style={TextColor}>Pages</h4>
                        <ul>
                        <li><Link to='/' className='transition text-decoration-none' style={TextColor}>Home</Link></li>
                        <li><Link to='/Caurse' className='transition text-decoration-none' style={TextColor}>Caurse</Link></li>
                        <li><Link to='/About_US' className='transition text-decoration-none' style={TextColor}>About-US</Link></li>
                        <li><Link to='/Contact_US' className='transition text-decoration-none' style={TextColor}>Contact-US</Link></li>
                        <li><Link to='/Students' className='transition text-decoration-none' style={TextColor}>Students</Link></li>
                        </ul>
                    </div>
                    <div className='footer-contact col-lg-3'>
                        <h4 style={TextColor}>Contact-us</h4>
                        <ul>
                            <li style={TextColor} className='transition'>
                                <i className='pe-2 fas fa-phone-volume' />
                                <p>+8801748967433</p>
                            </li>
                            <li style={TextColor} className='transition'>
                                <i className="pe-2 fa-solid fa-envelope"></i>
                                <p>darpon.edu.bd@gmail.com</p>
                            </li>
                            <li style={TextColor} className='transition'>
                                <i className="pe-2 fa-solid fa-location-dot"></i>
                                <p>70/1 Sir Iqbal Road, Courtpara, Kushtia</p>
                            </li>
                        </ul>
                        <div className='footer-contact-icons'>
                            <a href="" target='_blank'><i className="transition fa-brands fa-linkedin"></i></a>
                            <a href="https://www.facebook.com/DarponPolytechnic/" target='_blank'><i className="transition fa-brands fa-square-facebook"></i></a>
                            <a href="" target='_blank'><i className="transition fa-brands fa-square-instagram"></i></a>
                            <a href="" target='_blank'><i className="transition fa-brands fa-square-twitter"></i></a>
                        </div>
                    </div>
                </div>
                <hr className='m-0 p-0' />
                <p className='text-center pt-4'>&copy;Copyright {year} || All right reserved by Darpon Polytechnic Institute </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer