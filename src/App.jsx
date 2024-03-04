import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About_US from "./Pages/About_US";
import Gallery from "./Pages/Gallery";
import VanillaTilt from 'vanilla-tilt';
import { useEffect } from "react";
import Notice from "./Components/Notice/Notice";
import AllTeacher from "./Pages/AllTeacher";
import Students from "./Pages/Students";
import Contact_US from "./Pages/Contact_US";
import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login";
import Error from './Pages/Error';
import Campus from './Components/Campus/Campus';
import Admin from "./Admin/Admin";
import AddTeacher from './Admin/AddTeacher';
import AddGellary from './Admin/AddGellary';
import UpdateNotice from "./Admin/UpdateNotice";
import Course from "./Pages/Course";
import AllNotice from "./Pages/AllNotice";

function App() {
   // ------- vanilla-tilt start ---------
   useEffect(()=>{
    VanillaTilt.init(document.querySelectorAll(".ThreeDEffect"), {
      max : 20,
      speed : 50,
      glare : true,
      "max-glare" : 0.50
    })
  });
  // ------- vanilla-tilt end ---------

  // --------- scroll animation ----------
  useEffect(()=>{
    AOS.init({
        duration: 1000,
        once: true,
    });
  }, []);
  // --------- scroll animation ----------

  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Course" element={<Course/>} />
        <Route path="/About_US" element={<About_US/>} />
        <Route path="/Contact_US" element={<Contact_US/>} />
        <Route path="/Gallery" element={<Gallery/>} />
        <Route path="/Notice" element={<Notice/>} />
        <Route path="/AllTeacher" element={<AllTeacher/>} />
        <Route path="/Students" element={<Students/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Campus" element={<Campus/>} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/AddTeacher" element={<AddTeacher/>} />
        <Route path="/AddGellary" element={<AddGellary/>} />
        <Route path="/AllNotice" element={<AllNotice/>} />
        <Route path="/UpdateNotice" element={<UpdateNotice/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
  )
}

export default App;
