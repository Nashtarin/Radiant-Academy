import React, { useState } from 'react';
import CourseCard from './CourseCard';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const CourseSection = () => {
    const [show, setShow] = useState(true);

    const handleShow = () => {
        setShow(true)
    }
    const handleHide = () => {
        setShow(false)
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
                            <div className="swap-off"><FiPlusCircle className="text-xl font-bold mr-2 cursor-pointer" onClick={handleShow} /></div>
                            <div className="swap-on"><FiMinusCircle className="text-xl font-bold mr-2 cursor-pointer" onClick={handleHide} /></div>
                        </label>
                        <h3 className="text-2xl font-medium"> Category Name</h3>
                    </div>
                    {show && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>}
                    {/* <Slider {...settings}></Slider> 
                    <style jsx global>
                        {`
                                        .course-card .slick-list{
                                            padding-top: 0;
                                            padding-bottom: 2rem;
                                        }
                                        .course-card .slick-prev, .course-card .slick-next {
                                            top: 2.5rem;
                                        }
                                        .slick-prev:before {
                                            color: #32007E;
                                        }
                                        
                                        .slick-next:before {
                                            color: #32007E;
                                        }
                                        
                                        .slick-slide:focus {
                                            outline: none;
                                        }
                                        
                                        .slick-dots {
                                            bottom: 0px;
                                        }
                                        
                                        .slick-dots li button:before {
                                            font-size: 0.75rem;
                                            opacity: 1;
                                            color: #CCDEE2;
                                        }
                                        
                                        .slick-dots li.slick-active button:before {
                                            opacity: .75;
                                            color: #F2522F;
                                        }
                                    `}
                    </style> */}
                </div>
                <div className="my-3">
                    <div className="p-2 mb-1 flex items-center">
                        <label className="swap swap-flip">
                            <input type="checkbox" className="hidden" />
                            <div className="swap-off"><FiPlusCircle className="text-xl font-bold mr-2 cursor-pointer" onClick={handleShow} /></div>
                            <div className="swap-on"><FiMinusCircle className="text-xl font-bold mr-2 cursor-pointer" onClick={handleHide} /></div>
                        </label>
                        <h3 className="text-2xl font-medium"> Category Name</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>
                </div>
                <div>
                    <div className="p-2 mb-1 flex items-center">
                        <label className="swap swap-flip">
                            <input type="checkbox" className="hidden" />
                            <div className="swap-off"><FiPlusCircle className="text-xl font-bold mr-2 cursor-pointer" onClick={handleShow} /></div>
                            <div className="swap-on"><FiMinusCircle className="text-xl font-bold mr-2 cursor-pointer" onClick={handleHide} /></div>
                        </label>
                        <h3 className="text-2xl font-medium"> Category Name</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>
                </div>
                <div className="my-3">
                    <div className="p-2 mb-1 flex items-center">
                        <label className="swap swap-flip">
                            <input type="checkbox" className="hidden" />
                            <div className="swap-off"><FiPlusCircle className="text-xl font-bold mr-2 cursor-pointer" onClick={handleShow} /></div>
                            <div className="swap-on"><FiMinusCircle className="text-xl font-bold mr-2 cursor-pointer" onClick={handleHide} /></div>
                        </label>
                        <h3 className="text-2xl font-medium"> Category Name</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>
                </div>
                <div>
                    <div className="p-2 mb-1 flex items-center">
                        <label className="swap swap-flip">
                            <input type="checkbox" className="hidden" />
                            <div className="swap-off"><FiPlusCircle className="text-xl font-bold mr-2 cursor-pointer" onClick={handleShow} /></div>
                            <div className="swap-on"><FiMinusCircle className="text-xl font-bold mr-2 cursor-pointer" onClick={handleHide} /></div>
                        </label>
                        <h3 className="text-2xl font-medium"> Category Name</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>
                </div>
            </div>

            <div className="text-red-600 mb-12 text-center text-lg font-medium">
                <p>More courses are coming soon!</p>
            </div>
        </div>
    );
};

export default CourseSection;