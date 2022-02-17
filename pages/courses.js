import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Course from './course';

const Courses = () => {
    const size = 5;
    const data = useSelector((state) => state.courses.coursesList);
    const totalPage = Math.ceil(data?.total/size)
    const pageNumber = totalPage;
    return (
        <div className='container mx-auto'>
            <h1 className='text-6xl	font-bold text-violet-900 my-8 text-center'>Our Awesome Courses</h1>
            <div className="grid container mx-auto my-4 grid-rows-auto lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4">
                {data?.books.map(course=><Course
                    key={course.id}
                    course={course}/>)}
            </div>
            <div className='container text-center my-8'>
                {[...Array(pageNumber).keys()].map(number=><button  className='bg-violet-500 hover:bg-violet-900  text-white rounded-lg mx-5 px-5' 
                key={number}>
                    {number + 1}</button>)}
            </div>  
        </div>
    );
};

export default Courses;