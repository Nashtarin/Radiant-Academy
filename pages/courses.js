import React, { useEffect } from 'react';
import Course from '../components/Course/Course';

export const getServerSideProps = async () => {
    const url = 'https://api.itbook.store/1.0/new';
    const res = await fetch(url);
    const data = await res.json();

    return {
        props: {
            data: data.books
        }
    }
}
const Courses = ({ data }) => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-5xl	font-bold text-violet-900 mb-5 pt-14 text-center'>Our Awesome Courses</h1>
            <h2 className='text-center text-2xl pb-8'> Course found: {data.length}</h2>
            <div className="grid w-5/6 mx-auto my-4 grid-rows-auto lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {data.map(course => <Course
                    key={course.id}
                    course={course} />)}
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