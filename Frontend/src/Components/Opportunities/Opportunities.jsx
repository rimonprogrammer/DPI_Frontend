import React from 'react';
import '../../assets/CSS/Common.css';
import './Opportunities.css';

function Opportunities() {
  return (
    <div className='container' id='Opportunities'>
        <h1 className='head-title'>Our Opportunities</h1>
        <div className="Opportunities">
            <div data-aos='fade-left'>
                <div className="Opportunities-details details1 rounded transition">
                    <h3 className='transition'> উপব্ত্তি</h3>
                    <p>প্রতি ৬ মাসে ৪ হাজার টাকা করে উপব্ত্তি প্রদান করা হয়। এতে শিক্ষার্থীদের পড়ার খরচ বহন করা সহজ হয়</p>
                </div>
            </div>
            <div data-aos='zoom-in'>
                <div className="Opportunities-details details2 rounded transition">
                    <h3 className='transition'>উন্নত মানের শিক্ষা ব্যবস্থা</h3>
                    <p>দক্ষ শিক্ষক দ্বারা শিক্ষার্থীদের উন্নতমানের শিক্ষা দেওয়া হয় এবং শিক্ষার্থীদের ট্যালেন্টেড করে গড়ে তোলা হয় </p>
                </div>
            </div>
            <div data-aos='fade-right'>
                <div className="Opportunities-details details3 rounded transition">
                    <h3 className='transition'>পরীক্ষা ব্যবস্থা</h3>
                    <p>পরীক্ষার মাধ্যমে শিক্ষার্থীদের প্রতিষ্ঠানের নির্দিষ্ট পাঠ্যক্রমে উন্নয়নের মান যাচাই করা হয়।</p>
                </div>
            </div>
            <div data-aos='fade-left'>
                <div className="Opportunities-details details4 rounded transition">
                    <h3 className='transition'>প্রজেক্টর</h3>
                    <p>কঠিন এবং আইসিটি সাবজেক্টগুলো প্রজেক্টরের মাধ্যমে ক্লাস নিয়ে বুঝানো হয়.</p>
                </div>
            </div>
            <div data-aos='zoom-in'>
                <div className="Opportunities-details details5 rounded transition">
                    <h3 className='transition'>উন্নত মানের ল্যাব</h3>
                    <p>আধুুনিক ল্যাবে প্র্যাকটিক্যাল বিষয়গুলো শিক্ষার্থীদের হাতে কলমে শেখানো হয়। এতে শিক্ষার্থীরা কঠিন বিষয়গুলো সহজেই বুঝাতে পারে </p>
                </div>
            </div>
            <div data-aos='fade-right'>
                <div className="Opportunities-details details6 rounded transition">
                    <h3 className='transition'>অভীভাবকের সাথে যোগাযোগ</h3>
                    <p>প্রতিনিয়ত অভীভাবকের সাথে যোগাযোগ রাখা হয়। এতে অভীভাবকরা শিক্ষার্থীদের পড়াশোনার অবস্থা সম্পর্কে জানতে পারে </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Opportunities;