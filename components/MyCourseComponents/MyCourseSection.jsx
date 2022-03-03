import React from 'react';
import MyCourseCard from '../MyCourseComponents/MyCourseCard';
import CourseCard from '../CourseComponents/CourseCard';

const MyCourseSection = () => {
    return (
        <div className='bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200'>
            <div className='container mx-auto'>
                <h1 className='text-4xl	font-bold text-violet-900 dark:text-violet-400 mb-2 pt-20 pb-10 text-center'>
                    My Course
                </h1>
                <div className="px-16 pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    <MyCourseCard />
                    <MyCourseCard />
                    <MyCourseCard />
                    <MyCourseCard />
                </div>
            </div>

            <div className='container mx-auto'>
                <h1 className='text-4xl	font-bold text-violet-900 dark:text-violet-400 mb-2 pt-20 pb-10 text-center'>
                    Upcoming Course
                </h1>
                <div className="px-16 pb-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    <CourseCard />
                    <CourseCard />
                </div>
            </div>
        </div>
    );
};

export default MyCourseSection;