import React, { useState } from 'react';
import Course from './course';

export const getStaticProps = async ()=>{
    const url = 'https://api.itbook.store/1.0/new';
    const url1 = "https://jsonplaceholder.typicode.com/posts"
    const res = await fetch(url);
    const data = await res.json();
console.log('res',data)
    return{
        props:{
            data:data.books,
            total: data.total
            // data
        }
    }
}
const Courses = ({data,total}) => {
    const [pageNumber,setPageNumber] = useState(0);
    return (
        <div className='container mx-auto'>
            <h1 className='text-6xl	font-bold text-violet-900 mb-5 text-center'>Our Awesome Courses</h1>
            <div className="grid container mx-auto my-4 grid-rows-auto lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4">
                {data.map(course=><Course
                    key={course.id}
                    course={course}/>)}
            </div>
            {/* <div className='container text-center'>
                    <button className=''>{total}</button>
            </div> */}
        </div>
    );
};

export default Courses;