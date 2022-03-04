import React from 'react';
import { useSelector } from 'react-redux';
import CourseSlider from './CourseSlider';

const CourseSection = () => {
    const allCourses = useSelector((state) => state.courses.coursesList);

    return (
        <div className='bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200'>
            <div className='container mx-auto'>
                <h1 className='text-4xl	font-bold text-violet-900 dark:text-violet-400 mb-2 pt-20 pb-12 text-center'>
                    Find Premium Courses With Radiant Plus
                </h1>
                <div className="px-16 pb-20">
                    <CourseSlider allCourses={allCourses} />
                </div>

                {/* <div className="px-16 pb-20">
                    <div className="my-3">
                        <div className="p-2 mb-1 flex items-center">
                            <label className="swap swap-flip">
                                <input type="checkbox" className="hidden" />
                            </label>
                            <h3 className="text-2xl font-medium">Up Next in CSS Specialization</h3>
                        </div>
                        <CourseSlider/>
                    </div>
                    <div>
                        <div className="p-2 mb-1 flex items-center">
                            <label className="swap swap-flip">
                                <input type="checkbox" className="hidden" />
                            </label>
                            <h3 className="text-2xl font-medium">Up Next in JS Specialization</h3>
                        </div>
                        <CourseSlider/>
                    </div>
                    <div className="my-3">
                        <div className="p-2 mb-1 flex items-center">
                            <label className="swap swap-flip">
                                <input type="checkbox" className="hidden" />
                            </label>
                            <h3 className="text-2xl font-medium">Up Next in Tailwind Specialization</h3>
                        </div>
                        <CourseSlider/>
                    </div>
                </div> */}

                <div className="text-red-600 dark:text-red-400 pb-12 text-center text-lg font-medium">
                    <p>More courses are coming soon!</p>
                </div>
            </div>
        </div>
    );
};

export default CourseSection;