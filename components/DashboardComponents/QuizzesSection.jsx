import React from 'react';
import { FaBookmark, FaClone, FaDollarSign, FaEdit, FaHeart, FaPlus, FaTrashAlt, FaUserFriends } from 'react-icons/fa';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import useCrud from '../../utilities/Hooks/useCrud';
import DashboardSidebar from './DashboardSidebar';

const QuizzesSection = () => {
    const { handleRemove } = useCrud();
    const allQuizzes = useSelector((state) => state.quizzes.quizzesList);
    
    return (
        <div className='px-0 sm:px-6 lg:px-12 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200'>
            <div className='grid grid-rows-1 md:grid-cols-[250px_minmax(300px,_1fr)] lg:grid-cols-[250px_minmax(600px,_1fr)] p-8 gap-5'>
                <section>
                    <DashboardSidebar />
                </section>
                <section className='bg-white dark:bg-slate-700 shadow-md rounded-md py-8 px-5 h-auto'>
                    <div className="flex justify-between items-center px-3 mb-4">
                        <h3 className="text-2xl flex items-center"><FaClone className="mr-3" /> Quizzes</h3>
                        <Link href="/dashboard/quizzes/add-quiz" passHref>
                            <button className="flex items-center btn"><FaPlus className="text-sm mr-2" /> Add Quizzes</button>
                        </Link>
                    </div>
                    <section className="overflow-x-auto">
                        <div>
                            {
                                allQuizzes.map(quiz => (
                                    <div className='container grid md:grid-cols-7 xs:grid-cols-1 px-5 bg-white dark:bg-slate-600 rounded-md mb-2 py-4 shadow-md dark:shadow-slate-600' key={quiz._id}>
                                        <div className='col-span-2'>
                                            <h2 className='inline-flex'><span className="text-orange-500 my-auto mr-1.5">
                                                <FaBookmark />
                                                </span>
                                                {quiz.questionText.split(' ').slice(0, 5).toString().replace(/,/g, ' ')}..
                                            </h2>
                                        </div>
                                        <div className='flex justify-center'>
                                            <h2 className='inline-flex'>
                                                <span className='text-rose-500 dark:text-rose-400 my-auto mr-1'>
                                                    Answer No:
                                                </span>
                                                {quiz.answer}
                                            </h2>
                                        </div>
                                        <div className='flex justify-center'>
                                            <h2 className='inline-flex font-base'>
                                                <span className='my-auto text-rose-600 dark:text-rose-400 mr-1'>
                                                    Steps:
                                                </span>
                                                {quiz.totalSurveySteps}
                                            </h2>
                                        </div>
                                        <div className='flex justify-center'>
                                            <h2 className='inline-flex'>
                                                <span className='text-violet-800 dark:text-violet-400 my-auto mr-1'>
                                                    <FaUserFriends />
                                                </span>
                                                0
                                            </h2>
                                        </div>
                                        <div className='flex justify-center'>
                                            <h2 className='text-green-700 dark:text-green-500 font-semibold'>
                                                NEW
                                            </h2>
                                        </div>
                                        <div className='flex justify-end'>
                                            <h2 className='inline-flex'>
                                                <span className='text-slate-700 dark:text-slate-200 mr-3'>
                                                    <FaEdit />
                                                </span>
                                                <span className='text-red-500 dark:text-red-400 cursor-pointer'>
                                                    <FaTrashAlt onClick={() => handleRemove(quiz._id, 'quiz')}/>
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

export default QuizzesSection;