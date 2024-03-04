import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer/Footer';
import { useAll_UserContext } from '../ContextAPI/UserContext';
import './CSS/Admin.css';
import { MdDelete } from "react-icons/md";
import Loader from '../Components/Loader';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Components/Navbar/Navbar';

function Admin() {
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
    
    const {data, deleteUser, deleteRes} = useAll_UserContext([]);
    if(deleteRes){
        if(deleteRes.acknowledged === true){
            toast.success('User deleted', alert);
        }
    }

    const [userData, setUserData] = useState([]);
    useEffect(()=>{
        if(localStorage.getItem('dpi-user')){
            const data = JSON.parse(localStorage.getItem('dpi-user'));
            setUserData(data);
        }
        }, []);


  return (
    <>
        <Navbar/>
        <div className="container">
            <div>
                {
                    userData ? 
                    <div>
                        <h3 className='fw-bold mt-2'>My profile</h3>
                        <div className="card p-2 w-25">
                            <h5><span className='fw-bold'>name: </span>{userData.name}</h5>
                            <h5><span className='fw-bold'>phone: </span>{userData.phone}</h5>
                            <h5><span className='fw-bold'>email: </span>{userData.email}</h5>
                        </div>
                        <hr />
                    </div> : <Loader/>
                }
            </div>
            <h4>All-user data</h4>
            <div className="all-users">
                {
                    data ? 
                    data.map((data, index) =>{
                        const {_id, name, phone, email} = data;

                        return(
                            <div key={index} className="card border border-danger mt-3">
                                <div className="card-body">
                                    <p><span className='fw-bold'>ID: </span>{_id}</p>
                                    <h5><span className='fw-bold'>Name: </span>{name}</h5>
                                    <h6><span className='fw-bold'>Email: </span>{email}</h6>
                                    <h6><span className='fw-bold'>Phone: </span>{phone}</h6>
                                    <button onClick={()=>deleteUser(_id)} className='border-0 text-danger'><MdDelete className='MdDelete' /></button>
                                </div>
                            </div>
                        )
                    }) : <Loader/>
                }
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

export default Admin