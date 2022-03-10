import React from 'react';
import { FaBookmark, FaClone, FaEdit, FaHeart, FaPlus, FaTrashAlt, FaEye } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { deleteTopic, approveTopic } from '../../utilities/redux/slices/forumSlice';
import DashboardSidebar from './DashboardSidebar';

const ForumSection = () => {
    const dispatch = useDispatch();

    const allTopics = useSelector((state) => state.forums.forumsList);

    const handleForumRemove = (id) => {
        Swal.fire({
            title: 'Are you sure you want to remove this?',
            text: "Warding: you won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#6B21A8',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                if (dispatch(deleteTopic(id))) {
                    Swal.fire(
                        'Deleted!',
                        'Topic has been deleted.',
                        'success'
                    )
                } else {
                    console.log('Something went wrong!');
                }
            } else {
                console.log('Something went wrong!');
            }
          })
    }

    const handleApproveTopic = (id) => {
        Swal.fire({
            title: 'Are you sure you want to approve this?',
            text: "Warding: the post will be public now!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#6B21A8',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Approve it!'
          }).then((result) => {
            if (result.isConfirmed) {
                if (dispatch(approveTopic(id))) {
                    Swal.fire(
                        'Approved!',
                        'Topic has been approved.',
                        'success'
                    )
                } else {
                    console.log('Something went wrong!');
                }
            } else {
                console.log('Something went wrong!');
            }
          })
    }
    
    return (
        <div className='px-0 sm:px-6 lg:px-12 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200'>
            <div className='grid grid-rows-1 md:grid-cols-[250px_minmax(300px,_1fr)] lg:grid-cols-[250px_minmax(600px,_1fr)] p-8 gap-5'>
                <section>
                    <DashboardSidebar />
                </section>
                <section className='bg-white dark:bg-slate-700 shadow-md rounded-md py-8 px-5 h-auto'>
                    <div className="flex justify-between items-center px-3 mb-4">
                        <h3 className="text-2xl flex items-center"><FaClone className="mr-3" /> Forum Topics</h3>
                        <button className="flex items-center btn"><FaPlus className="text-sm mr-2" /> Add Topics</button>
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
                                                </button> : <button className='text-rose-400 dark:text-rose-400 font-semibold' onClick={() => handleApproveTopic(forum._id)}>
                                                    PENDING
                                                </button>
                                        }
                                        </div>
                                        <div className='flex justify-end'>
                                            <h2 className='inline-flex'>
                                                <span className='text-slate-700 dark:text-slate-200 mr-3'>
                                                    <FaEdit />
                                                </span>
                                                <span className='text-red-500 dark:text-red-400 cursor-pointer'>
                                                    <FaTrashAlt  onClick={() => handleForumRemove(forum._id)}/>
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