import React from 'react';
import './Notice.css';
import '../../assets/CSS/Common.css';
import SM_Tawhidur from '../../assets/TeacherIMG/SM-Tawhidur-Rahman.png';
import MST_Hazera from '../../assets/TeacherIMG/MST-Hajera-Khatun...png';
import checkMark from '../../assets/Img/checkmark.png';
import { Link } from 'react-router-dom';
import { useNoticeContexts } from '../../ContextAPI/NoticeContext'
import Loader from '../Loader';
import { useThemeContext } from '../../ContextAPI/ThemeContext';

function Notice() {
const {theme, themeColor} = useThemeContext();
  const {data} = useNoticeContexts();

  return (
    <div className='Notice' style={ theme ? theme : themeColor} id='notice'>
        <div className="container">
            {
                data ?
                data.map((noticeData, index)=>{
                    const {tagline} = noticeData;
                    return(
                        <marquee key={index} className='rounded transition'>
                            <h3>{tagline}</h3>
                        </marquee>
                    )
                }) : <Loader/>
            }
            <div className="row">
                <div className="col-lg-7" data-aos='fade-right'>
                    <ul className="list-group mt-2 mb-2">
                        <li className="list-group-item active notice-header text-center">নোটিশ বোর্ড</li>
                        <Link to='/Notice' className='text-decoration-none'>
                            {
                                data ?
                                data.map((noticeData, index)=>{
                                    const { notice1, notice2, notice3} = noticeData;
                                    return(
                                        <div key={index}>
                                            <Link to='/AllNotice' className="list-group-item transition">
                                                <img src={checkMark} className="me-1" alt="notice board... dpi"/>
                                                {notice1.length > 90 ? notice1.slice(0,90) + '...' : notice1}
                                            </Link>
                                            <Link to='/AllNotice' className="list-group-item transition">
                                                <img src={checkMark} className="me-1" alt="notice board... dpi"/>
                                                {notice2.length > 90 ? notice2.slice(0,90) + '...' : notice2}
                                            </Link>
                                            <Link to='/AllNotice' className="list-group-item transition">
                                                <img src={checkMark} className="me-1" alt="notice board... dpi"/>
                                                {notice3.length > 90 ? notice3.slice(0,90) + '...' : notice3}
                                            </Link>
                                        </div>
                                    )
                                }) : <Loader/>
                            }
                        </Link>
                    </ul>
                    <ul className="list-group mt-3 mb-2">
                        <li className="list-group-item active notice-header text-center">গুরুত্বপূর্ণ লিংক</li>
                        {
                            impURL.map((text, index)=>{
                                const {title, url} = text;
                                return(
                                    <a key={index} className='list-group-item transition' href={url} target='_blank'>
                                        <img src={checkMark} className="me-1" alt="notice board... dpi"/>   
                                        {title}
                                    </a>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="col-lg-5" data-aos='fade-left'>
                    <div className="row">
                        {
                            director.map((card, index)=>{
                                const {img, name, intro, alt} = card;

                                return(
                                    <div key={index} className="col-md-6 institute-director">
                                        <div className="card mt-2">
                                            <div className='institute-director-img'>
                                                <img className='card-img-top transition' src={img} alt={alt} />
                                            </div>
                                            <div className="card-body">
                                                <h5 className='text-center transition'>{name}</h5>
                                                <p className='text-center'>{intro}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Notice;

const impURL = [
    {
        title : "বাংলাদেশ কারিগরি শিক্ষা বোর্ড",
        url : "https://bteb.gov.bd/"
    },
    {
        title : "শিক্ষা বোর্ডের ফলাফল",
        url : "http://www.educationboardresults.gov.bd/"
    },
    {
        title : "শিক্ষা বৃুত্তির আবেদন",
        url : "https://eservice.bkkb.gov.bd/"
    },
];

const director = [
    {
        img : SM_Tawhidur,
        name : "S.M Towhidur Rahman",
        intro : "Chairman at Darpon Polytechnic Institute",
        alt : "SM Tawhidur rahman image, Chairman at Darpon Polytechnic Institute (DPI)"
    },
    {
        img : MST_Hazera,
        name : "Mst. Hazera Begum",
        intro : "Principal at Darpon Polytechnic Institute",
        alt : "Mst Hazera Begum image, Principal at Darpon Polytechnic Institute (DPI)"
    }
];