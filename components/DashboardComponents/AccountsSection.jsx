import React from 'react';
import { FaPenNib, FaPlus, FaTrashAlt, FaUserFriends, FaUsers, FaUsersCog, FaBuffer, FaSyncAlt } from "react-icons/fa";
import DashboardSidebar from './DashboardSidebar';
import { useSelector } from 'react-redux';
import useCrud from '../../utilities/Hooks/useCrud';

const AccountsSection = () => {
    const { handleRemove, handleRole } = useCrud();
    const allUsers = useSelector((state) => state.users.usersList);

    return (
        <div className="px-0 sm:px-6 lg:px-12 bg-white dark:bg-slate-800">
            <div className="grid grid-rows-1 md:grid-cols-[250px_minmax(300px,_1fr)] lg:grid-cols-[250px_minmax(600px,_1fr)] p-8 gap-5">
                <div>
                    <DashboardSidebar />
                </div>

                <div className="bg-slate-100 dark:bg-slate-700 dark:text-slate-200 shadow-md rounded-md py-8 px-5 h-auto">
                    <div className="flex justify-between items-center px-3 mb-4">
                        <h3 className="text-2xl flex items-center"><FaUsers className="mr-3" /> Accounts</h3>
                        <button className="flex items-center btn"><FaPlus className="text-sm mr-2" /> Add Accounts</button>
                    </div>
                    <section className="overflow-x-auto">
                        <div>
                            {
                                allUsers?.map(user => (
                                    <div className='container grid md:grid-cols-6 xs:grid-cols-1 px-5 bg-white dark:bg-slate-600 rounded-md mb-2 py-4 shadow-md dark:shadow-slate-600' key={user._id}>
                                        <h2 className='text-white inline-flex col-span-1'>
                                            <span className="text-orange-500 my-auto mr-1.5">
                                                <FaUserFriends />
                                            </span>
                                            {user.displayName}
                                        </h2>

                                        <h2 className='inline-flex col-span-2'>
                                            <span className="flex items-center justify-center">
                                                <FaPenNib className="mr-1.5 text-orange-500 dark:text-orange-400"/>
                                            </span>
                                            {user.email}
                                        </h2>
                                        <h2 className='inline-flex font-base justify-center'>
                                            <span className='my-auto text-orange-600 dark:text-orange-400 mr-1'>
                                                <FaBuffer />
                                            </span>
                                            {user.enrolledCourses.length}
                                        </h2>
                                        <h2 className='text-green-700 dark:text-green-500 font-semibold flex justify-center'>
                                            <span className='my-auto text-orange-600 dark:text-orange-400 mr-1 text-lg'>
                                                <FaUsersCog/>
                                            </span>
                                            ROLE: <span>{user.role}</span>
                                        </h2>
                                        <h2 className='inline-flex justify-end'>
                                            <span className='text-slate-700 dark:text-slate-200 mr-3 cursor-pointer'>
                                            {
                                                user.role === 'user' ? <FaSyncAlt  onClick={() => handleRole(user._id, 'admin')}/> : <FaSyncAlt onClick={() => handleRole(user._id, 'user')}/>
                                            }
                                            </span>
                                            <span className='text-rose-500 dark:text-rose-400 cursor-pointer'>
                                                <FaTrashAlt onClick={() => handleRemove(user._id, 'account')}/>
                                            </span>
                                        </h2>
                                    </div>
                                )
                                )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AccountsSection;