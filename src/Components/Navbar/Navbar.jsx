import React, { useEffect, useState } from 'react';
import './Navbar.css';
import '../../assets/CSS/Common.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import dpiLogo from '../../assets/Img/dpi-logo.png';
import bar from '../../assets/Img/bar-icon.png';
import settingIcon from '../../assets/Img/setting_icon.png';
import { useThemeContext } from '../../ContextAPI/ThemeContext';
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";
import { FcAdvertising } from "react-icons/fc";
import { FcPlus } from "react-icons/fc";
import { FcMultipleCameras } from "react-icons/fc";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();  

    const alert = {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    };

    document.title = 'Home || Darpon Polytechnic Institute';

    const data = useThemeContext();
    const {theme, themeColor, ColorCode, GreenTheme, BlueTheme, darkTheme, blackTheme, alertText} = data;

    useEffect(()=>{
        toast.success(alertText, alert);
    }, [alertText])

    const [show, setShow] = useState(false);  // setting icon toggler
    const [sticky, setSticky] = useState('');
    const [stickyNavBg, setStickyNavBg] = useState({});

    const stickyNav = () =>{
        if(window.scrollY){
            setSticky('fixed-top');
            setStickyNavBg(themeColor);
        }
        else{
            setSticky('')
            setStickyNavBg({});
        }
    }
    window.addEventListener("scroll", stickyNav);

    const logoutBtn = () =>{
        localStorage.clear();
        navigate('/');
    };

    const [userData, setUserData] = useState();
    useEffect(()=>{
        if(localStorage.getItem('dpi-user')){
            const data = JSON.parse(localStorage.getItem('dpi-user'));
            setUserData(data.email);
        }
        }, [userData]);
  return (
    <div>
        {/* ------ top header start ------ */}
        <nav style={ theme ? theme : themeColor} className='top-header' id='header'>
            <div className='container top-header-content'>
                <div className='top-header-contact'>
                    <p><IoCall className='IoCall' /> +8801748967433</p>
                    <p><MdEmail className='MdEmail' /> darpon.edu.bd@gmail.com</p>
                </div>
                <div className='top-header-right'>
                    {
                        (localStorage.getItem('dpi-user')) ? null :
                        <Link to='/Login'>
                            <button className='authenticationBtn'>Login <FaArrowRightToBracket className='ms-1'/></button>
                        </Link>
                    }
                    <div className="top-header-display">
                        <img onClick={()=> setShow(!show)}  src={settingIcon} alt="Darpon Polytechnic Institute (DPI)" />
                    </div>
                </div>
            </div>
        </nav>
        {
            show ? (
                <div className='theme-section rounded'>
                    <p className='m-0 p-1 ps-2'>Theme</p>
                    <hr className='m-0 mb-2 text-danger' />
                    <div className='theme-box mb-2'>
                        <div onClick={GreenTheme} className={`green rounded-pill ${ColorCode === '#00715c' ? 'themSelect' : ''}`}></div>
                        <div onClick={BlueTheme} className={`blue rounded-pill ${ColorCode === '#1A2B51' ? 'themSelect' : ''}`}></div>
                        <div onClick={darkTheme} className={`dark rounded-pill ${ColorCode === '#18191A' ? 'themSelect' : ''}`}></div>
                        <div onClick={blackTheme} className={`black rounded-pill ${ColorCode === '#042234' ? 'themSelect' : ''}`}></div>
                    </div>
                    <div> 
                        {userData === 'darpon.edu.bd@gmail.com' ? 
                            <div>
                                <Link to='/Admin' className='text-decoration-none'> 
                                    <div className='setting-link'>
                                        <div className='setting'>
                                            <IoMdSettings className='setting-icons' />
                                            <span className='mt-'>Setting</span>
                                        </div>
                                        <FaArrowRightToBracket className='me-3'/>
                                    </div>
                                </Link> 
                                <Link to='/UpdateNotice' className='text-decoration-none'> 
                                    <div className='setting-link'>
                                        <div className='setting'>
                                            <FcAdvertising className='setting-icons' />
                                            <span>Update Notice</span>
                                        </div>
                                        <FaArrowRightToBracket className='me-3'/>
                                    </div>
                                </Link> 
                                <Link to='/AddTeacher' className='text-decoration-none'> 
                                    <div className='setting-link'>
                                        <div className='setting'>
                                            <FcBusinessman className='setting-icons' />
                                            <span>Add Teacher</span>
                                        </div>
                                        <FcPlus className='me-3 setting-add-icons'/>
                                    </div>
                                </Link> 
                                <Link to='/AddGellary' className='text-decoration-none'> 
                                    <div className='setting-link'>
                                        <div className='setting'>
                                            <FcMultipleCameras className='setting-icons' />
                                            <span>Add Gallery</span>
                                        </div>
                                        <FcPlus className='me-3 setting-add-icons'/>
                                    </div>
                                </Link> 
                            </div>: null
                        }
                        {
                            (localStorage.getItem('dpi-user')) ? <button onClick={logoutBtn} className='authenticationBtn logout m-2'>Logout<IoMdLogOut className='ms-1'/></button> : null
                        }
                    </div>
                </div>
            ) : ''
        }
        {/* ------ top header end ------ */}
        <header style={stickyNavBg} className={`${sticky}`}>
            <nav className='navbar container navbar-expand-lg '>
                {/* --- header logo start --- */}
                <Link to='/' className='text-decoration-none'>
                    <p className="navbar-brand"> 
                        <img className='rounded' src={dpiLogo} alt="darpon polytechnic institute logo icon" />
                        <span className='ps-2'><span>Darpon</span> Polytechnic</span>
                    </p>
                </Link>
                {/* --- header logo end --- */}

                {/* --- header toggler start--- */}
                <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#CollapseID'>
                    <img src={bar} alt="darpon polytechnic institute navbar icon" />
                </button>
                {/* --- header toggler end--- */}

                {/* --- menubar start --- */}
                <div className="navbar-collapse collapse" id="CollapseID">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <Link to='/' className={`nav-link ${location.pathname === '/' ? 'actives' : ''}`}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Course' className={`nav-link ${location.pathname === '/Course' ? 'actives' : ''}`}>Course</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/About_US' className={`nav-link ${location.pathname === '/About_US' ? 'actives' : ''}`}>About-US</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Contact_US' className={`nav-link ${location.pathname === '/Contact_US' ? 'actives' : ''}`}>Contact-US</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Students' className={`nav-link ${location.pathname === '/Students' ? 'actives' : ''}`}>Students</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Gallery' className={`nav-link ${location.pathname === '/Gallery' ? 'actives' : ''}`}>Gallery</Link>
                        </li>
                    </ul>
                </div>
                {/* --- menubar end --- */}
            </nav>
        </header>
        <ToastContainer 
            position="top-center"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition = {Bounce}
        />
    </div>
  )
}

export default Navbar;