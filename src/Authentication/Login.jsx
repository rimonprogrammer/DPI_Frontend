import React, { useState } from 'react';
import './CSS/Authentication.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Footer from '../Components/Footer/Footer';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Components/Navbar/Navbar';

function Login() {
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
    email : '',
    password : ''
});

const handleChange = (e) =>{
    setData({...data, [e.target.name] : e.target.value});
};


const handleSubmit = async (e) =>{
    e.preventDefault();

    const { email, password} = data;

    if(email === '' || !email.includes('@') || !email.includes('.' || !email.includes('com'))){
        toast.error('Please enter a valid email!', alert);
    }
    if(password.length < 6){
        toast.error('Password must be at least 6 character!', alert);
    }
    else{
        const { data } = await axios.post('https://dpi-api.onrender.com/api/auth/LoginUser',{
            email,
            password,
        });

        if(data.status === 'true'){
            toast.success('Login successfully', alert);
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
        <h4 className='container mt-3'><Link to='/'>Home</Link>/Login</h4>
        <div className='authentication d-flex justify-content-center align-items-center'>
            <form className='bg-light' onSubmit={handleSubmit}>
                <p>Create your account</p>

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

                <button type='submit' className='submit-btn mt-2 m-auto w-100 text-light fw-bold rounded transition'>Submit</button>
                
                <p className='text-center mt-2 fw-bold'>Don't have account?</p>
                <Link to='/Signup' className='exist-btn'>
                    <button className='m-auto w-100 fw-bold rounded transition '>Create an account</button>
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

export default Login