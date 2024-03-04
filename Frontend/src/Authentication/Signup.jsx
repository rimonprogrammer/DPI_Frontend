import React, { useState } from 'react';
import './CSS/Authentication.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Footer from '../Components/Footer/Footer';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Components/Navbar/Navbar';

function Signup() {
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

    const navigate = useNavigate();

    const [data, setData] = useState({
        name : '',
        phone : '',
        email : '',
        password : ''
    });

    const handleChange = (e) =>{
        setData({...data, [e.target.name] : e.target.value});
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const {name, phone, email, password} = data;

        if(name.length < 3){
            toast.error('Name must be at least 3 character!', alert);
        }
        if(phone.length < 11 || phone.length >= 12 || !phone.includes('01')){
            toast.error('Please enter a valid number!', alert);
        }
        if(!email.includes('@gmail.com') || !email === ''){
            toast.error('Please enter a valid email!', alert);
        }
        if(password.length < 6){
            toast.error('Password must be at least 6 character!', alert);
        }
        else{
            const { data } = await axios.post('https://dpi-api.onrender.com/api/auth/AddUser',{
                name,
                phone,
                email,
                password
            });

            if(data.status === 'true'){
                toast.success('Account create successfully', alert);
                localStorage.setItem('dpi-user', JSON.stringify(data.user));
                setTimeout(()=>{
                    navigate('/');
                }, 2000);
            }
            if(data.status === 'false'){
                toast.error(data.msg, alert);
            }
        }
    }
  return (
    <>  
        <Navbar/>
        <h4 className='container mt-3'><Link to='/'>Home</Link>/SignUp</h4>
        <div className='authentication'>
            <form onSubmit={handleSubmit} className='mt-3 bg-light border-1 border-primary rounded'>
                <p>Create your account</p>

                <label htmlFor="name">Name</label>
                <input 
                    onChange={handleChange} 
                    type="text"
                    name="name" 
                    id="name" 
                    placeholder='Your name' 
                    autoFocus 
                    className='border-1 border-primary rounded' 
                />

                <label htmlFor="phone" className='mt-2'>Phone number</label>
                <input 
                    onChange={handleChange} 
                    type="number" 
                    name="phone" 
                    id="phone" 
                    placeholder='Your phone number' 
                    className='border-1 border-primary rounded' 
                />

                <label htmlFor="email" className='mt-2'>Email</label>
                <input
                     onChange={handleChange}
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder='Your email address' 
                    className='border-1 border-primary rounded' 
                />

                <label htmlFor="password" className='mt-2'>Password</label>
                <input 
                    onChange={handleChange} 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder='Password' 
                    className='border-1 border-primary rounded' 
                />

                <button type='submit' className='submit-btn mt-2 m-auto w-100 fw-bold rounded transition'>Submit</button>
                
                <p className='text-center mt-2 fw-bold'>Already have an account?</p>
                <Link to='/Login' className='exist-btn'>
                    <button className='m-auto w-100 fw-bold rounded transition '>Login</button>
                </Link>
            </form>
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
        <Footer/>
    </>
  )
}

export default Signup;

