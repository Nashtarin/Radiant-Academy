import Link from 'next/link';
import React from 'react';
import { FaChevronRight, FaClone, FaDiceD6, FaFolder, FaHome, FaNewspaper, FaSignInAlt, FaUser, FaUserCog } from 'react-icons/fa';
import useAuth from '../../utilities/Hooks/useAuth';

const DashboardSidebar = () => {
    const { logout } = useAuth();

    return (
        <div className="bg-slate-100 rounded-md shadow-md py-8 px-5 h-auto dark:bg-slate-700 text-slate-700 dark:text-slate-200">
            <Link href="/dashboard" passHref>
                <button className="btn-ghost w-full px-4 py-1 dark:hover:text-slate-500 hover:bg-slate-200 text-lg text-left flex justify-between items-center rounded-full">
                    <span className="flex items-center"><FaHome className="mr-5" /> Dashboard</span>
                    <span><FaChevronRight className="text-sm" /></span>
                </button>
            </Link>
            <Link href="/dashboard/accounts" passHref>
                <button className="btn-ghost w-full px-4 py-1 dark:hover:text-slate-500 hover:bg-slate-200 text-lg text-left flex items-center my-1 rounded-full">
                    <FaUser className="mr-5" /> Account
                </button>
            </Link>
            <Link href="/dashboard/courses" passHref>
                <button className="btn-ghost w-full px-4 py-1 dark:hover:text-slate-500 hover:bg-slate-200 text-lg text-left flex items-center rounded-full">
                    <FaClone className="mr-5" /> Course
                </button>
            </Link>
            <Link href="/quiz" passHref>
                <button className="btn-ghost w-full px-4 py-1 dark:hover:text-slate-500 hover:bg-slate-200 text-lg text-left flex items-center my-1 rounded-full">
                    <FaDiceD6 className="mr-5" /> Quiz
                </button>
            </Link>
            <Link href="/forum" passHref>
                <button className="btn-ghost w-full px-4 py-1 dark:hover:text-slate-500 rounded-full hover:bg-slate-200 text-lg text-left flex items-center">
                    <FaFolder className="mr-5" /> Forum
                </button>
            </Link>
            <button className="btn-ghost w-full px-4 py-1 rounded-full dark:hover:text-slate-500 hover:bg-slate-200 text-lg text-left flex items-center my-1">
                <FaNewspaper className="mr-5" /> Newsletters
            </button>
            <Link href="/dashboard/admins" passHref>
                <button className="btn-ghost w-full px-4 py-1 rounded-full dark:hover:text-slate-500 hover:bg-slate-200 text-lg text-left flex items-center">
                    <FaUserCog className="mr-5" /> Admins
                </button>
            </Link>
            <button className="btn-ghost w-full px-4 py-1 my-1 rounded-full dark:hover:text-slate-500 hover:bg-slate-200 hover:text-red-600 text-lg text-left flex items-center" onClick={logout}>
                <FaSignInAlt className="mr-5" /> Log out
            </button>
        </div>
    );
};

export default DashboardSidebar;