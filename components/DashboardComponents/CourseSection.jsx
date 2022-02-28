import React from 'react';
import { FaClone, FaDollarSign, FaEdit, FaHeart, FaPlus, FaTrashAlt, FaUserFriends } from 'react-icons/fa';
import DashboardSidebar from './DashboardSidebar';

const CourseSection = () => {
    return (
        <div className='px-0 sm:px-6 lg:px-12'>
            <div className='grid grid-rows-1 md:grid-cols-[250px_minmax(300px,_1fr)] lg:grid-cols-[250px_minmax(600px,_1fr)] m-8 gap-5'>
                <section>
                    <DashboardSidebar/>
                </section>
                <section className='bg-slate-100 shadow-md rounded-md py-8 px-5 h-auto'>
                    <div className="flex justify-between items-center px-3 mb-4">
                            <h3 className="text-2xl flex items-center"><FaClone className="mr-3" /> Courses</h3>
                            <button className="flex items-center btn"><FaPlus className="text-sm mr-2" /> Add Courses</button>
                    </div>
                    <section className="overflow-x-auto">
                        <div className='flex justify-between px-5 bg-white rounded-md mb-2 py-4 drop-shadow-md'>
                            <h1>Course Name</h1>
                            <h1 className='inline-flex'>
                                <span className='text-rose-500 my-auto mr-1'>
                                    <FaDollarSign/>
                                </span>
                                59
                            </h1>
                            <h1 className='inline-flex'>
                                <span className='text-violet-800 my-auto mr-1'>
                                    <FaUserFriends/>
                                </span>
                                 1648
                            </h1>
                            <h1 className='inline-flex font-base'>
                                <span className='my-auto text-rose-600 mr-1'>
                                    <FaHeart/>
                                </span>
                                 168
                             </h1>
                            <h1 className='text-green-700 font-semibold'>PREMIUM</h1>
                            <h1 className='inline-flex'>
                                <span className='text-slate-700 mr-1'>
                                    <FaEdit/>
                                </span>
                                <span className='text-red-500'>
                                    <FaTrashAlt/>
                                </span>
                            </h1>
                        </div>
                        {/* individual course row */}
                        <div className='flex justify-between px-5 bg-white rounded-md mb-2 py-4 drop-shadow-md'>
                            <h1>Course Name</h1>
                            <h1 className='inline-flex'>
                                <span className='text-rose-500 my-auto mr-1'>
                                    <FaDollarSign/>
                                </span>
                                59
                            </h1>
                            <h1 className='inline-flex'>
                                <span className='text-violet-800 my-auto mr-1'>
                                    <FaUserFriends/>
                                </span>
                                 1648
                            </h1>
                            <h1 className='inline-flex font-base'>
                                <span className='my-auto text-rose-600 mr-1'>
                                    <FaHeart/>
                                </span>
                                 168
                             </h1>
                            <h1 className='text-violet-800 font-semibold'>FREE</h1>
                            <h1 className='inline-flex'>
                                <span className='text-slate-700 mr-1'>
                                    <FaEdit/>
                                </span>
                                <span className='text-red-500'>
                                    <FaTrashAlt/>
                                </span>
                            </h1>
                        </div>
                        {/* individual course row */}
                        <div className='flex justify-between px-5 bg-white rounded-md mb-2 py-4 drop-shadow-md'>
                            <h1>Course Name</h1>
                            <h1 className='inline-flex'>
                                <span className='text-rose-500 my-auto mr-1'>
                                    <FaDollarSign/>
                                </span>
                                59
                            </h1>
                            <h1 className='inline-flex'>
                                <span className='text-violet-800 my-auto mr-1'>
                                    <FaUserFriends/>
                                </span>
                                 1648
                            </h1>
                            <h1 className='inline-flex font-base'>
                                <span className='my-auto text-rose-600 mr-1'>
                                    <FaHeart/>
                                </span>
                                 168
                             </h1>
                            <h1 className='text-green-700 font-semibold'>PREMIUM</h1>
                            <h1 className='inline-flex'>
                                <span className='text-slate-700 mr-1'>
                                    <FaEdit/>
                                </span>
                                <span className='text-red-500'>
                                    <FaTrashAlt/>
                                </span>
                            </h1>
                        </div>
                        {/* individual course row */}
                        <div className='flex justify-between px-5 bg-white rounded-md mb-2 py-4 drop-shadow-md'>
                            <h1>Course Name</h1>
                            <h1 className='inline-flex'>
                                <span className='text-rose-500 my-auto mr-1'>
                                    <FaDollarSign/>
                                </span>
                                59
                            </h1>
                            <h1 className='inline-flex'>
                                <span className='text-violet-800 my-auto mr-1'>
                                    <FaUserFriends/>
                                </span>
                                 1648
                            </h1>
                            <h1 className='inline-flex font-base'>
                                <span className='my-auto text-rose-600 mr-1'>
                                    <FaHeart/>
                                </span>
                                 168
                             </h1>
                            <h1 className='text-green-700 font-semibold'>PREMIUM</h1>
                            <h1 className='inline-flex'>
                                <span className='text-slate-700 mr-1'>
                                    <FaEdit/>
                                </span>
                                <span className='text-red-500'>
                                    <FaTrashAlt/>
                                </span>
                            </h1>
                        </div>
                        {/* individual course row */}
                        <div className='flex justify-between px-5 bg-white rounded-md mb-2 py-4 drop-shadow-md'>
                            <h1>Course Name</h1>
                            <h1 className='inline-flex'>
                                <span className='text-rose-500 my-auto mr-1'>
                                    <FaDollarSign/>
                                </span>
                                59
                            </h1>
                            <h1 className='inline-flex'>
                                <span className='text-violet-800 my-auto mr-1'>
                                    <FaUserFriends/>
                                </span>
                                 1648
                            </h1>
                            <h1 className='inline-flex font-base'>
                                <span className='my-auto text-rose-600 mr-1'>
                                    <FaHeart/>
                                </span>
                                 168
                             </h1>
                            <h1 className='text-green-700 font-semibold'>PREMIUM</h1>
                            <h1 className='inline-flex'>
                                <span className='text-slate-700 mr-1'>
                                    <FaEdit/>
                                </span>
                                <span className='text-red-500'>
                                    <FaTrashAlt/>
                                </span>
                            </h1>
                        </div>
                        {/* individual course row */}
                        <div className='flex justify-between px-5 bg-white rounded-md mb-2 py-4 drop-shadow-md'>
                            <h1>Course Name</h1>
                            <h1 className='inline-flex'>
                                <span className='text-rose-500 my-auto mr-1'>
                                    <FaDollarSign/>
                                </span>
                                59
                            </h1>
                            <h1 className='inline-flex'>
                                <span className='text-violet-800 my-auto mr-1'>
                                    <FaUserFriends/>
                                </span>
                                 1648
                            </h1>
                            <h1 className='inline-flex font-base'>
                                <span className='my-auto text-rose-600 mr-1'>
                                    <FaHeart/>
                                </span>
                                 168
                             </h1>
                            <h1 className='text-green-700 font-semibold'>PREMIUM</h1>
                            <h1 className='inline-flex'>
                                <span className='text-slate-700 mr-1'>
                                    <FaEdit/>
                                </span>
                                <span className='text-red-500'>
                                    <FaTrashAlt/>
                                </span>
                            </h1>
                        </div>
                        {/* individual course row */}
                    </section>
                </section>
            </div>
        </div>
    );
};

export default CourseSection;