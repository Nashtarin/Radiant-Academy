import React, { useState } from 'react';
import CourseCard from './CourseCard';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

const CourseSection = () => {
    const [course1, setCourse1] = useState(true);
    const [course2, setCourse2] = useState(true);
    const [course3, setCourse3] = useState(true);

    const handleShowCourse1 = () => {
        setCourse1(true);
    }
    const handleHideCourse1 = () => {
        setCourse1(false);
    }
    const handleShowCourse2 = () => {
        setCourse2(true);
    }
    const handleHideCourse2 = () => {
        setCourse2(false);
    }
    const handleShowCourse3 = () => {
        setCourse3(true);
    }
    const handleHideCourse3 = () => {
        setCourse3(false);
    }

    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 700,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },
        ],
    };

    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl	font-bold text-violet-900 mt-10 mb-2 py-8 text-center'>
                Find Premium Courses With Radiant Plus
            </h1>

            <div className="px-16 pb-20">
                <div>
                    <div className="p-2 mb-1 flex items-center">
                        <label className="swap swap-flip">
                            <input type="checkbox" className="hidden" />
                            <div className="swap-off"><FiPlusCircle className="text-xl font-bold mr-2 cursor-pointer" onClick={handleShowCourse1} /></div>
                            <div className="swap-on"><FiMinusCircle className="text-xl font-bold mr-2 cursor-pointer" onClick={handleHideCourse1} /></div>
                        </label>
                        <h3 className="text-2xl font-medium"> Category Name</h3>
                    </div>
                    {course1 && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>}                    
                </div>
                <div className="my-3">
                    <div className="p-2 mb-1 flex items-center">
                        <label className="swap swap-flip">
                            <input type="checkbox" className="hidden" />
                            <div className="swap-off"><FiPlusCircle className="text-xl font-bold mr-2 cursor-pointer" onClick={handleShowCourse2} /></div>
                            <div className="swap-on"><FiMinusCircle className="text-xl font-bold mr-2 cursor-pointer" onClick={handleHideCourse2} /></div>
                        </label>
                        <h3 className="text-2xl font-medium"> Category Name</h3>
                    </div>
                    {course2 && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>}
                </div>
                <div>
                    <div className="p-2 mb-1 flex items-center">
                        <label className="swap swap-flip">
                            <input type="checkbox" className="hidden" />
                            <div className="swap-off"><FiPlusCircle className="text-xl font-bold mr-2 cursor-pointer" onClick={handleShowCourse3} /></div>
                            <div className="swap-on"><FiMinusCircle className="text-xl font-bold mr-2 cursor-pointer" onClick={handleHideCourse3} /></div>
                        </label>
                        <h3 className="text-2xl font-medium"> Category Name</h3>
                    </div>
                    {course3 && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>}
                </div>
            </div>

            <div className="text-red-600 mb-12 text-center text-lg font-medium">
                <p>More courses are coming soon!</p>
            </div>
        </div>
    );
};

export default CourseSection;