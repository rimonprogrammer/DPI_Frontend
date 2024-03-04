import React from 'react';
import Footer from '../Components/Footer/Footer';
import { useNoticeContexts } from '../ContextAPI/NoticeContext';
import Loader from '../Components/Loader';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

function AllNotice() {
  const {data} = useNoticeContexts();

  return (
    <>
        <Navbar/>
        <div className="container">
            <h4 className='mt-2'>
                <Link to='/' className='text-decoration-none  fw-bold'>Home</Link> /All notice
            </h4>
            {
                data ?
                data.map((noticeData, index)=>{
                    const {tagline, notice1, notice2, notice3} = noticeData;
                    return(
                        <ul key={index} className='p-0'>
                            <h4 key={index} className='p-2 bg-dark-subtle'>
                                <span className='fw-bold'>Tagline:</span> {tagline}
                            </h4>
                            <li className='list-group-item transition p-2 pt-3'>
                                <span className='fw-bold'>Notice--{index + 1}:</span>  {notice1}
                            </li>
                            <li className='list-group-item transition p-2 pt-3'>
                                <span className='fw-bold'>Notice--{index + 1}:</span>  {notice2}
                            </li>
                            <li className='list-group-item transition p-2 pt-3'>
                                <span className='fw-bold'>Notice--{index + 1}:</span>  {notice3}
                            </li>
                        </ul>
                    )
                }) : <Loader/>
            }
        </div>
        <Footer/>
    </>
  )
}

export default AllNotice;