import React from 'react';
import Link from 'next/link';
import { FaBookmark, FaClone, FaEdit, FaHeart, FaPlus, FaTrashAlt, FaEye } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import useCrud from '../../utilities/Hooks/useCrud';
import DashboardSidebar from './DashboardSidebar';

const ForumSection = () => {
    const { handleApprove, handleRemove } = useCrud();
    const allTopics = useSelector((state) => state.forums.forumsList);
    
    return (
        <div className='px-0 sm:px-6 lg:px-12 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200'>
            <div className='grid grid-rows-1 md:grid-cols-[250px_minmax(300px,_1fr)] lg:grid-cols-[250px_minmax(600px,_1fr)] p-8 gap-5'>
                <section>
                    <DashboardSidebar />
                </section>
                <section className='bg-white dark:bg-slate-700 shadow-md rounded-md py-8 px-5 h-auto'>
                    <div className="flex justify-between items-center px-3 mb-4">
                        <h3 className="text-2xl flex items-center"><FaClone className="mr-3" /> Forum Topics</h3>
                        <Link href="/dashboard/forums/add-topic" passHref>
                            <button className="flex items-center btn"><FaPlus className="text-sm mr-2" /> Add Topics</button>
                        </Link>
                    </div>
                    <section className="overflow-x-auto">
                        <div>
                            {
                                allTopics.map(forum => (
                                    <div className='container grid md:grid-cols-6 xs:grid-cols-1 px-5 bg-white dark:bg-slate-600 rounded-md mb-2 py-4 shadow-md dark:shadow-slate-600' key={forum._id}>
                                        <div className='col-span-2'>
                                            <h2 className='inline-flex'><span className="text-orange-500 my-auto mr-1.5">
                                                <FaBookmark />
                                                </span>
                                                {forum.title.split(' ').slice(0, 7).toString().replace(/,/g, ' ')}...
                                            </h2>
                                        </div>
                                        <div className='flex justify-center'>
                                            <h2 className='inline-flex'>
                                                <span className='text-violet-800 dark:text-violet-400 my-auto mr-1'>
                                                    <FaEye />
                                                </span>
                                                {forum.views}
                                            </h2>
                                        </div>
                                        <div className='flex justify-center'>
                                            <h2 className='inline-flex font-base'>
                                                <span className='my-auto text-rose-600 dark:text-rose-400 mr-1'>
                                                    <FaHeart />
                                                </span>
                                                {forum.loves}
                                            </h2>
                                        </div>
                                        <div className='flex justify-center'>
                                        {
                                            forum.status ? <button className='text-green-700 dark:text-green-500 font-semibold'>
                                                    APPROVED
                                                </button> : <button className='text-rose-400 dark:text-rose-400 font-semibold' onClick={() => handleApprove(forum._id, 'topic')}>
                                                    PENDING
                                                </button>
                                        }
                                        </div>
                                        <div className='flex justify-end'>
                                            <h2 className='inline-flex'>
                                                <span className='text-slate-700 dark:text-slate-200 mr-3 cursor-pointer'>
                                                    <Link href={`/dashboard/forums/edit-topic/${forum._id}`} passHref>
                                                        <FaEdit />
                                                    </Link>
                                                </span>
                                                <span className='text-red-500 dark:text-red-400 cursor-pointer'>
                                                    <FaTrashAlt  onClick={() => handleRemove(forum._id, 'topic')}/>
                                                </span>
                                            </h2>
                                        </div>
                                    </div>
                            ))
                            }
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
};

export default ForumSection;