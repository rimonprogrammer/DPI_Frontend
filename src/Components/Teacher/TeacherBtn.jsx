import React from 'react';
import '../../assets/CSS/Common.css';
import '../../assets/CSS/TempBtn.css';
import {Link} from 'react-router-dom';

function TeacherBtn() {
  return (
    <div className='container'>
        <div className='d-flex justify-content-center my-5'>
            <Link to='/AllTeacher'>
                <button className='TempBtn rounded'>See All Teacher</button>
            </Link>
        </div>
    </div>
  )
}

export default TeacherBtn;