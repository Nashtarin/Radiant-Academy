import React from 'react';
import { FaBookmark, FaUsers } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import DashboardSidebar from './DashboardSidebar';
import { useSelector } from 'react-redux';

const AdminsSection = () => {
    const allUsers = useSelector((state) => state.users.usersList);
    const allAdmins = allUsers.filter(user => user.role === 'admin');

    return (
        <div className="px-0 sm:px-6 lg:px-12 bg-white dark:bg-slate-800">
            <div className="grid grid-rows-1 md:grid-cols-[250px_minmax(300px,_1fr)] lg:grid-cols-[250px_minmax(600px,_1fr)] p-8 gap-5">
                <div>
                    <DashboardSidebar />
                </div>

                <div className="bg-slate-100 dark:bg-slate-700 dark:text-slate-200 shadow-md rounded-md py-8 px-5 h-auto">
                    <div className="flex justify-between items-center px-3 mb-4">
                        <h3 className="text-2xl flex items-center"><FaUsers className="mr-3" /> Admins</h3>
                    </div>
                    <section className="overflow-x-auto">
                    {
                                allAdmins.map(admin => (
                        <div className='container grid md:grid-cols-4 xs:grid-cols-1 px-5 bg-white dark:bg-slate-600 rounded-md mb-2 py-4 shadow-md dark:shadow-slate-600' key={admin._id}>
                            <div className='col-span-2 flex'>
                                <h2 className='my-auto'>
                                    {admin.displayName}
                                </h2>
                            </div>
                            <div className='flex justify-center'>
                                <h2 className='inline-flex my-auto'>
                                    <span className="text-blue-500 my-auto mr-1.5">
                                        <FaBookmark />
                                    </span>
                                    {admin.role}
                                </h2>
                            </div>
                            <div className='flex justify-center'>
                                <h2 className=' inline-flex'>
                                    <span className="text-blue-500 my-auto mr-1.5">
                                        <MdEmail />
                                    </span> 
                                    Send Email
                                </h2>
                            </div>
                        </div>
                            ))
                            }
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AdminsSection;