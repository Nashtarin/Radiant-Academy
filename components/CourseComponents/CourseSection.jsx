import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import CourseSlider from './CourseSlider';

const CourseSection = () => {
    const allCourses = useSelector((state) => state.courses.coursesList);
    
    const category1 = '';
    const category2 = 'html';
    const category3 = 'css';
    const category4 = 'javascript';

    return (
        <div className='bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200'>
            <div className='container mx-auto'>
                <h1 className='text-4xl	font-bold text-violet-900 dark:text-violet-400 mb-2 pt-20 pb-12 text-center mx-2'>
                    Find Premium Courses With Radiant Plus
                </h1>
                <div className="px-16 pb-20">
                    <CourseSlider allCourses={allCourses} category={category1}/>
                </div>

                <div className="px-16 pb-20">
                    <div className="my-3">
                        <div className="p-2 mb-1 flex items-center">
                            <label className="swap swap-flip">
                                <input type="checkbox" className="hidden" />
                            </label>
                            <h3 className="text-2xl font-medium">Up Next in HTML Specialization</h3>
                        </div>
                        <CourseSlider allCourses={allCourses} category={category2}/>
                    </div>
                    <div>
                        <div className="p-2 mb-1 flex items-center">
                            <label className="swap swap-flip">
                                <input type="checkbox" className="hidden" />
                            </label>
                            <h3 className="text-2xl font-medium">Up Next in CSS Specialization</h3>
                        </div>
                        <CourseSlider allCourses={allCourses} category={category3}/>
                    </div>
                    <div className="my-3">
                        <div className="p-2 mb-1 flex items-center">
                            <label className="swap swap-flip">
                                <input type="checkbox" className="hidden" />
                            </label>
                            <h3 className="text-2xl font-medium">Up Next in Javascript Specialization</h3>
                        </div>
                        <CourseSlider allCourses={allCourses} category={category4}/>
                    </div>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default CourseSection;