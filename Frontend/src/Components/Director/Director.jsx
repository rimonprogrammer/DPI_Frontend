import React from 'react';
import '../../assets/CSS/Common.css';
import './Director.css';
import SM_Tawhidur from '../../assets/TeacherIMG/SM-Tawhidur-Rahman.png';

export default function Director() {

  return (
    <div className='Director'>
        <div className="container">
            <h1 className='head-title'>Directors</h1>
            {
                directorsDetails.map((element, index)=>{
                    const {study, img, description1, description2, name, subject, intro, number, email, linkedInURL, fbURL, instagramURL, twitterURL} = element;
                    
                    return(
                        <div key={index} className={`director-item`}>
                            <div className="row">
                                <div className='col-md-5 director-content d-flex justify-content-end' data-aos='fade-right'>
                                    <div className='director-content-img position-relative'>
                                        <div className='overflow transition'>
                                            <div className="overflow-social director-social">
                                                <div className='overflow-social-icon'>
                                                    <a href={linkedInURL} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                                                    <a href={fbURL} target='_blank'><i className="transition fa-brands fa-square-facebook"></i></a>
                                                    <a href={instagramURL} target='_blank'><i className="transition fa-brands fa-square-instagram"></i></a>
                                                    <a href={twitterURL} target='_blank'><i className="transition fa-brands fa-twitter"></i></a>
                                                </div>
                                                <p>{study}</p>
                                            </div>
                                        </div>
                                        <img className='w-100 h-100' src={img} alt={`${name} image, ${intro} (DPI)`}/>
                                        <div className='contact-details-content'>
                                            <div className='content-details-box rounded director-text-box'>
                                                <h5>{name}</h5>
                                                <p>{subject}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-7' data-aos='fade-left'>
                                    <div className='director-content-text'>
                                        <p className='user-select-none'>{description1}</p>
                                        <p className='user-select-none'>{description2}</p>
                                        <h4>{name}</h4>
                                        <h5>{subject}</h5>
                                        <span>{intro}</span>
                                        <div className='director-content-footer d-flex mt-4'>
                                            <div className='director-content-footer-social d-flex align-items-center'>
                                                <i className="text-danger fa-solid fa-mobile-screen-button"></i>
                                                <div className='ps-3'>
                                                    <p>Phone Number</p>
                                                    <span>{number}</span>
                                                </div>
                                            </div>
                                            <div className='director-content-footer-social d-flex align-items-center director-footer-email'>
                                                <i className="text-danger fa-regular fa-envelope"></i>
                                                <div className='ps-3'>
                                                    <p>Email Address</p>
                                                    <span>{email}</span>
                                                </div>
                                            </div>
                                        </div>
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


const directorsDetails = [
    {
        study : "Assalamualaikum, I am SM Tawhidur Rahman. I have complete BA honours in English from Dhaka University in 2011.",
        img : SM_Tawhidur,
        description1 : "সৌমিত্র জাতি গঠনে শিক্ষার কোন বিকল্প নেই। আর মানসম্মত শিক্ষা ব্যবস্থায় পারে সম-উন্নত জাতি গঠন করতে। আলোকিত জাতি গঠনের জন্য প্রয়োজন শিক্ষিত জনগোষ্ঠী, সেই সাথে প্রয়োজন আধুনিক শিক্ষা ব্যবস্থা এবং সমান্তরালে আধুনিক শিক্ষা প্রতিষ্ঠান। ”দর্পণ পলিটেকনিক ইনস্টিটিউট” মানসম্মত শিক্ষা প্রত্যয় নিয়েই শুরু করেছে তার অগ্রযাত্রা। ",
        description2 : `আমাদের অঙ্গীকার একটি আধুনিক শিক্ষার প্রাণকেন্দ্র হিসেবে গড়ে তোলা। আমাদের এই অঙ্গীকারের সফল রূপায়নে প্রয়োজন শিক্ষার্থী ও  সম্মানিত অভিভাবকদের সহযোগিতা। পরিশেষে সকল শিক্ষার্থী, অভিভাবক ও শুভাকাঙ্খীদের  ”দর্পণ পলিটেকনিক ইনস্টিটিউট” এর পক্ষ থেকে আন্তরিক অভিনন্দন ও শুভেচ্ছা জানাই....`,
        name : "SM Tawhidur Rahman",
        subject : "BA Honours (English)",
        intro : "Chairman at Darpon Polytechnic Institute",
        number : "01300000000",
        email : "tawhidurrahman@gmail.com",
        active : "active",
        fbURL : "/",
        instagramURL : "/",
        twitterURL : "/",
        linkedInURL : "/"
    }
];