import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Course from '../components/Course/Course';

const Courses = () => {
    const data = useSelector((state) => state.courses.coursesList);

    return (
        <div className='container mx-auto'>
            <h1 className='text-6xl	font-bold text-violet-900 mb-5 text-center'>Our Awesome Courses{data.length}</h1>
            <div className="grid container mx-auto my-4 grid-rows-auto lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4">
                {data.books.map(course=><Course
                    key={course.id}
                    course={course}/>)}
            </div>
            {/* <div className="grid container mx-auto grid-rows-auto lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4">
                <div>01</div>
                <div>02</div>
                <div>03</div>
                <div>04</div>
                <div>05</div>
                <div>06</div>
                <div>07</div>
                <div>08</div>
                <div>09</div>
                <div>017</div>
                <div>071</div>
                <div>09</div>
                <div>02</div>
                <div>03</div>
                <div>04</div>
                <div>05</div>
                <div>06</div>
                <div>07</div>
                <div>08</div>
                <div>09</div>
                <div>017</div>
                <div>071</div>
                <div>09</div>
            </div> */}
        </div>
    );
};

export default Courses;