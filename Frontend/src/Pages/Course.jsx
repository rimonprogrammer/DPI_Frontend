import React, { useState } from 'react';
import './CSS/Course.css';
import { GiCheckMark } from "react-icons/gi";
import Footer from '../Components/Footer/Footer';
import all_course from '../FrontEnd_API/Caurse';
import { useThemeContext } from '../ContextAPI/ThemeContext';
import Navbar from '../Components/Navbar/Navbar';

function Course() {
    const {theme, TextColor, themeColor} = useThemeContext();

    document.title = 'Caurse | Darpon Polytechnic Institute';

    const [courseData, setCourseData] = useState(all_course);

    const categoryData = [
        "All",
        ...new Set(
            all_course.map((element) =>{
                return element.title
            })
        )
    ];
    const [category, setCategory] = useState(categoryData);
    const [btnIndex, setBtnIndex] = useState(0);

    const CategoryBtn = (categories, index) =>{
        const CategoryResult = all_course.filter((course)=>{
            return course.title === categories;
        });
        setCourseData(CategoryResult);
        setBtnIndex(index)

        if(categories === 'All'){
            setCourseData(all_course);
        }
    }

  return (
    <>
        <Navbar/>
        <div className='pb-5 course' style={theme ? theme : themeColor}>
            <div className="container">
                <div className="course-header">
                    {
                        category.map((categories, index) =>{
                            return(
                                <button 
                                    onClick={()=> CategoryBtn(categories, index)} 
                                    key={index}
                                    className={`categoryBtn rounded transition me-3 mt-3 mb-3 ${index === btnIndex ? 'select_categoryBtn' : ''}`}
                                >
                                    {categories}
                                </button>
                            )
                        })
                    }
                </div>
                <div className="course-body">
                    {
                        courseData.map((courses, index) =>{
                            const {title, description, job_fields} = courses;
                            return(
                                <div key={index} className='mt-5'>
                                    <h3 className='fw-bold' style={TextColor}>{title}</h3>
                                    <p style={TextColor}>{description}</p>

                                    <h5 style={TextColor}>Job Fields</h5>
                                    <ul>
                                        {job_fields.map((element, index) =>{
                                            return(
                                                <li style={TextColor} key={index} className='job-fields'>
                                                    <GiCheckMark className='me-2 text-success' />
                                                    {element.field}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Course;

