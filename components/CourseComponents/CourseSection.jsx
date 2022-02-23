import React from 'react';
import { useSelector } from 'react-redux';
import CourseCard from './CourseCard';

const CourseSection = () => {
    const size = 5;
    const data = useSelector((state) => state.courses.coursesList);
    const totalPage = Math.ceil(data?.total / size)
    const pageNumber = totalPage;

    return (
        <div className='container mx-auto'>
            <h1 className='text-5xl	font-bold text-violet-900 mb-5 pt-14 text-center'>Our Awesome Courses</h1>
            {/* <h2 className='text-center text-2xl pb-8'> Course found: {data.books?.length}</h2> */}
            <div className="grid w-5/6 mx-auto my-4 grid-rows-auto lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {data.books.map(course => <CourseCard
                    key={course.id}
                    course={course} />)}
            </div>
            <div className='container text-center my-8'>
                {[...Array(pageNumber).keys()].map(number => <button className='bg-violet-500 hover:bg-violet-900  text-white rounded-lg mx-5 px-5'
                    key={number}>
                    {number + 1}</button>)}
            </div>
        </div>
    );
};

export default CourseSection;