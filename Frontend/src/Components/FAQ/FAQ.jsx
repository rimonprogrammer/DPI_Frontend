import React from 'react';
import './FAQ.css';
import '../../assets/CSS/Common.css';
import questionImg from '../../assets/Img/question.png';

function FAQ() {
  return (
    <div className='FAQ' id='FAQ'>
        <div className="container">
            <div className="row">
                <h1 className='head-title faq-title text-light pt-5'>FAQ</h1>
                <div data-aos='fade-right' className="col-md-6 faq-left-side d-flex align-items-center justify-content-center">
                    <img src={questionImg} alt="question image at darpon polytechnic institute" />
                    <h4 className='mt-4 fw-bold text-dark'>সচরাচর জানতে চাওয়া <span>প্রশ্নের</span> উত্তর</h4>
                    <p className='fw-bold text-center text-dark'>আপনাদের কমন কিছু প্রশ্নের উত্তর আমরা এখানে লিস্ট করে দিয়েছি। আমাদের কে প্রশ্ন করার পূর্বে এই লিস্টটি একবার পড়ে নেয়ার অনুরোধ থাকলো। তাহলে আমাদের উত্তরের জন্য আপনাকে অপেক্ষা করতে হবেনা এবং আপনার মূল্যবান সময় বেঁচে যাবে।</p>
                </div>
                <div data-aos='fade-left' className="col-md-6 accordion-content">
                    {
                      accordion.map((accordion, index) =>{
                        const {active, id, question, answer} = accordion;
                          return(
                            <div key={index} className="accordion mt-3">
                                <div className="accordion-item">
                                    <button className="accordion-button text-light bg-secondary" data-bs-toggle='collapse' data-bs-target={`#${id}`}>{question}</button>
                                    <div className={`accordion-collapse collapse bg-danger text-light ${active}`} id={id}>
                                        <div className="accordion-body active">{answer}</div>
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
  )
}

export default FAQ;

const accordion = [
    {
        active : "show",
        id : "accordion1",
        question : "কি কি ডকুমেন্ট দরকার ভর্তি প্রক্রিয়ায়?",
        answer : "পাসপোর্ট সাইজ ছবি 4 কপি এবং স্ট্যাম সাইজ ছবি 2 কপি সাথে এস এসসি পাসের সার্টিফিকেট এর ফটোকপি এবং মূল মার্কশিট"
    },
    {
        id : "accordion2",
        question : "প্রতিষ্ঠানে ভর্তি হওয়ার জন্য পরীক্ষা দেওয়া লাগবে কি না?",
        answer : "না, ভর্তি হওয়ার জন্য কোনো পরিক্ষা দেওয়া লাগবে না🙂"
    },
    {
        id : "accordion3",
        question : "কলেজ ইউনিফর্ম পরে যাওয়া কী বার্ধতামূলক?",
        answer : "হ্যা, অবশ্যই কলেজ ইউনিফর্ম পড়া অবস্খায় কলেজে উপস্থিত হতে হবে"
    },
    {
        id : "accordion4",
        question : "আপনাদের সাথে যোগাযোগ করব কীভাবে?",
        answer : "(+8801748967433) এই নাম্বারে কল দিয়ে অফিসে যোগাযোগ করতে পারবেন অথবা আমাদের ওয়েবসাইট এর Contact-Us অপশনে গিয়েও যোগাযোগ করতে পারবেন"
    },
    {
        id : "accordion5",
        question : "ভর্তি প্রসেস কি?",
        answer : "ভর্তি ফরম পূরণ করার জন্য অবশ্যই ভর্তি সংক্রান্ত আপনার সকল তথ্য আমাদের কাছে জমা দিতে হবে । এ জন্য আপনি আমাদের অফিসেও আসতে পারেন অথবা আমাদের ওয়েবসাইটের রেজিস্ট্রেশন অপশনেও ভর্তি সংক্রান্ত আপনার সকল তথ্য জমা দিতে পারেন"
    },
]