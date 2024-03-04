import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className='contact-us bg-light' id='Contact'>
        <div className="container">
            <h1 className='head-title'>Contact With US</h1>
            <div className="row">
                <div data-aos='fade-right' className="p-4 col-md-6 contact-with-info rounded">
                    <h4 className='rounded transition fw-bold text-light'>নিচের তথ্যগুলো দিয়ে আমাদের সাথে যোগাযোগ করুন</h4>
                    <p className='rounded transition p-2 text-light'>দর্পণ পলিটেকনিক ইনস্টিটিউট সর্বদাই আপনাদেরকে সাপোর্ট দেওয়ার জন্য প্রস্তুত থাকেন</p>
                    <div>
                        <i className='transition d-flex justify-content-center align-items-center fas fa-phone-volume' />
                        <p className='transition rounded text-light'>+8801748967433</p>
                    </div>
                    <div>
                        <i className='transition d-flex justify-content-center align-items-center fas fa-phone-volume' />
                        <p className='transition rounded text-light'>07163074 (Office)</p>
                    </div>
                    <div>
                        <i className="transition d-flex justify-content-center align-items-center fa-solid fa-envelope"></i>
                        <p className='transition rounded text-light'>darpon.edu.bd@gmail.com</p>
                    </div>
                    <div>
                        <i className="transition d-flex justify-content-center align-items-center fa-solid fa-location-dot"></i>
                        <p className='transition rounded text-light'>70/1 Sir Iqbal Road, Courtpara, Kushtia</p>
                    </div>
                    <div className='contact-social-icons'>
                        <a href="" target='_blank'><i className="d-flex justify-content-center align-items-center fa-brands fa-linkedin"></i></a>
                        <a href="https://www.facebook.com/DarponPolytechnic/" target='_blank'><i className="d-flex justify-content-center align-items-center fa-brands fa-square-facebook"></i></a>
                        <a href="" target='_blank'><i className="d-flex justify-content-center align-items-center fa-brands fa-square-instagram"></i></a>
                        <a href="" target='_blank'><i className="d-flex justify-content-center align-items-center fa-brands fa-square-twitter"></i></a>
                    </div>
                </div>
                <div data-aos='fade-left' className="col-md-6 contact-with-map">
                    <iframe className='rounded' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.5611534016653!2d89.13015957534074!3d23.90517547856509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe97aa8dabd719%3A0xb133d4a7132d024c!2sDarpon%20Polytechnic%20Institute!5e0!3m2!1sen!2sbd!4v1704721563074!5m2!1sen!2sbd" width="600" height="450" loading="lazy" ></iframe>
                </div>
            </div>
        </div>
        <div className='message-us'>
            <div className="container">
                <div data-aos='zoom-in' className='message-box'>
                    <h3 className='fw-bold text-center text-light'>Let's Contact</h3>
                    <form method='POSt' action="https://formspree.io/f/moqgwozj">
                        <input type="text" placeholder='Enter your name' name="name" id="name" className='w-100 p-2 mt-2 text-light rounded fw-bold'/>
                        <input type="email" placeholder='Enter your email' name="email" id="email" className='w-100 p-2 mt-2 text-light rounded fw-bold'/>
                        <input type="number" placeholder='Enter your phone number' name="number" id="number" className='w-100 p-2 mt-2 text-light rounded fw-bold'/>
                        <input type="text" placeholder='Enter your address' name="address" id="address" className='w-100 p-2 mt-2 text-light rounded fw-bold'/>
                        <textarea name="message" id="message" placeholder='Write your message' cols="30" rows="10"className='w-100 p-2 mt-2 text-light rounded fw-bold'></textarea>
                    
                        <button type='submit' className="common-btn mt-5 w-100">
                            <i></i><i></i><span>Send Message</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact