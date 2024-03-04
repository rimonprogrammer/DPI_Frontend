import React, { useEffect, useState } from 'react';
import './CSS/Admin.css';
import Footer from '../Components/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { useNoticeContexts } from '../ContextAPI/NoticeContext';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Components/Navbar/Navbar';

function UpdateNotice() {
    const navigate = useNavigate();

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
    const {data} = useNoticeContexts('');

    const [allNotice, setAllNotice] = useState();
    const [value, setValue] = useState()
    const notice = () =>{
        data.map((notice) =>{
            setAllNotice(notice);
            setValue(notice.tagline)
        })
    };
    console.log(value)
    useEffect(()=>{
        notice();
    });

    const [Notice, setNotice] = useState({
        tagline : '',
        notice1 : '',
        notice2 : '',
        notice3 : ''
    })
    const handleChange = (e) =>{
        setNotice({...Notice, [e.target.name] : e.target.value})
    }

    // update a particular notice
    const updateNotice = async (e) =>{
        e.preventDefault();

        const noticeID = allNotice ? allNotice._id : '';
        const {tagline, notice1, notice2, notice3} = Notice;

        const result = await fetch(`https://dpi-api.onrender.com/notice/${noticeID}`,{
            method : 'PATCH',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({tagline, notice1, notice2, notice3})
        });

        if(result.status === 200){
            toast.success('Notice update successfully', alert);
            setTimeout(()=>{
                navigate('/');
            }, 2000);
        }
    }

  return (
    <>
        <Navbar/>
        <div className="container">
        <h4 className='mt-2'>
            <Link to='/' className='text-decoration-none  fw-bold'>Home</Link> /Update notice
        </h4>
            <div className="add-notice mt-3 d-flex justify-content-center">
                <div>
                    <form className='bg-light mt-4 p-3'>
                        <label htmlFor="tagline">Tagline</label>
                        <input onChange={handleChange} type="text" name="tagline" id="tagline" placeholder='Enter the tagline' className='p-2 w-100 outline-none border-1 border-primary' />

                        <label htmlFor="notice1" className='mt-2'>Notice-1</label>
                        <input onChange={handleChange} type="text" name="notice1" id="notice1" placeholder='Enter first notice' className='p-2 w-100 outline-none border-1 border-primary' />

                        <label htmlFor="notice2" className='mt-2'>Notice-2</label>
                        <input onChange={handleChange} type="text" name="notice2" id="notice2" placeholder='Enter second notice' className='p-2 w-100 outline-none border-1 border-primary' />

                        <label htmlFor="notice3" className='mt-2'>Notice-3</label>
                        <input onChange={handleChange} type="text" name="notice3" id="notice3" placeholder='Enter third notice' className='p-2 w-100 outline-none border-1 border-primary' />
                    
                        <button onClick={updateNotice} type='submit' className='btn btn-success mt-3 w-25'>Save</button>
                    </form>
                </div>
            </div>
        </div>
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
        <Footer/>
    </>
  )
}

export default UpdateNotice;