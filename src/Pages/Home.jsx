import React from 'react';
import Hero from '../Components/Hero/Hero';
import Notice from '../Components/Notice/Notice';
import Subjects from '../Components/Subject/Subjects';
import Opportunities from '../Components/Opportunities/Opportunities';
import Teachers from '../Components/Teacher/Teachers';
import Campus from '../Components/Campus/Campus';
import Director from '../Components/Director/Director';
import GalleryIMG from '../Components/Gallery/GalleryIMG';
import TeacherBtn from '../Components/Teacher/TeacherBtn';
import GalleryBtn from '../Components/Gallery/GalleryBtn';
import FAQ from '../Components/FAQ/FAQ';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

function Home() {

  return (
    <>
        <Navbar/>
        <Hero />
        <Notice/>
        <Campus/>
        <Subjects/>
        <Opportunities/>
        <Director/>
        <Teachers/>
        <TeacherBtn/>
        <GalleryIMG/>
        <GalleryBtn/>
        <FAQ/>
        <Contact/>
        <Footer />
    </>
  )
}

export default Home;