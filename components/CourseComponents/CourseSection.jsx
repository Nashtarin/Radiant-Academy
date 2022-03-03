import React from 'react';
import CourseSlider from './CourseSlider';

const CourseSection = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl	font-bold text-violet-900 mt-10 mb-2 py-8 text-center'>
                Find Premium Courses With Radiant Plus
            </h1>
            <div className="px-16 pb-20">
                <CourseSlider/>
            </div>

            <div className="px-16 pb-20">
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
            </div>

            <div className="text-red-600 mb-12 text-center text-lg font-medium">
                <p>More courses are coming soon!</p>
            </div>
        </div>
    );
};

export default CourseSection;