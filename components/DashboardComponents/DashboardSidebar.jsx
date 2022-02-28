import Link from 'next/link';
import React from 'react';
import { FaHome, FaClone, FaChevronRight, FaUser, FaDiceD6, FaFolder, FaNewspaper, FaUserCog, FaSignInAlt } from 'react-icons/fa';

const DashboardSidebar = () => {
    return (
        <div className="bg-slate-100 rounded-md shadow-md py-8 px-5 h-auto">
            <Link href="/dashboard" passHref>
                <button className="btn-ghost w-full px-4 py-1  hover:bg-slate-200 text-lg text-left flex justify-between items-center rounded-full">
                    <span className="flex items-center"><FaHome className="mr-5" /> Dashboard</span>
                    <span><FaChevronRight className="text-sm" /></span>
                </button>
            </Link>
            <Link href="/dashboard/accounts" passHref>
                <button className="btn-ghost w-full px-4 py-1  hover:bg-slate-200 text-lg text-left flex items-center my-1 rounded-full">
                    <FaUser className="mr-5" /> Account
                </button>
            </Link>
            <Link href="dashboard/courses" passHref>
                <button className="btn-ghost w-full px-4 py-1  hover:bg-slate-200 text-lg text-left flex items-center rounded-full">
                    <FaClone className="mr-5" /> Course
                </button>
            </Link>
            <Link href="/quiz" passHref>
                <button className="btn-ghost w-full px-4 py-1  hover:bg-slate-200 text-lg text-left flex items-center my-1 rounded-full">
                    <FaDiceD6 className="mr-5" /> Quiz
                </button>
            </Link>
            <Link href="/forum" passHref>
                <button className="btn-ghost w-full px-4 py-1  rounded-full hover:bg-slate-200 text-lg text-left flex items-center">
                    <FaFolder className="mr-5" /> Forum
                </button>
            </Link>
            <Link href="/newsletter" passHref>
                <button className="btn-ghost w-full px-4 py-1 rounded-full  hover:bg-slate-200 text-lg text-left flex items-center my-1">
                    <FaNewspaper className="mr-5" /> Newsletters
                </button>
            </Link>
            <Link href="/dashboard/admins" passHref>
                <button className="btn-ghost w-full px-4 py-1 rounded-full  hover:bg-slate-200 text-lg text-left flex items-center">
                    <FaUserCog className="mr-5" /> Admins
                </button>
            </Link>
            <button className="btn-ghost w-full px-4 py-1 my-1 rounded-full   hover:bg-slate-200 hover:text-red-600 text-lg text-left flex items-center">
                <FaSignInAlt className="mr-5" /> Log out
            </button>
        </div>
    );
};

export default DashboardSidebar;