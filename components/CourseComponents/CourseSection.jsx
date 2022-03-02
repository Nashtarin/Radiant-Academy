import React, { useState } from 'react';
import CourseCard from './CourseCard';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

const CourseSection = () => {
    const [show, setShow] = useState(true);

    const handleShow = () => {
        setShow(true)
    }
    const handleHide = () => {
        setShow(false)
    }

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