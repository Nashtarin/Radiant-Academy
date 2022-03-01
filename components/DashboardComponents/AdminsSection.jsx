import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import { FaPlus, FaUsers, FaBookmark, FaEnvelope } from "react-icons/fa";

const AdminsSection = () => {
    return (
        <div className="px-0 sm:px-6 lg:px-12">
            <div className="grid grid-rows-1 md:grid-cols-[250px_minmax(300px,_1fr)] lg:grid-cols-[250px_minmax(600px,_1fr)] m-8 gap-5">
                <div>
                    <DashboardSidebar />
                </div>

                <div className="bg-slate-100 shadow-md rounded-md py-8 px-5 h-auto">
                    <div className="flex justify-between items-center px-3 mb-4">
                        <h3 className="text-2xl flex items-center"><FaUsers className="mr-3" /> Admins</h3>
                        <button className="flex items-center btn"><FaPlus className="text-sm mr-2" /> Add Admins</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table w-full bg-slate-200 overflow-scroll">
                            <tbody>
                                <tr className="bg-slate-200">
                                    <td className="font-semibold">Iftakher Hossen</td>
                                    <td>
                                        <span className="flex items-center">
                                            <FaBookmark className="text-blue-500 mr-1.5" /> Admin
                                        </span>
                                    </td>
                                    <td>
                                        <a href="mailto:iftakher.one@gmail.com" className="flex items-center">
                                            <FaEnvelope className="mr-2 text-lg" />Send Email
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Iftakher Rasha</td>
                                    <td>
                                        <span className="flex items-center">
                                            <FaBookmark className="text-blue-500 mr-1.5" /> Admin
                                        </span>
                                    </td>
                                    <td>
                                        <a href="mailto:" className="flex items-center">
                                            <FaEnvelope className="mr-2 text-lg" />Send Email
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">MD. Jahidul Islam</td>
                                    <td>
                                        <span className="flex items-center">
                                            <FaBookmark className="text-blue-500 mr-1.5" /> Admin
                                        </span>
                                    </td>
                                    <td>
                                        <a href="mailto:" className="flex items-center">
                                            <FaEnvelope className="mr-2 text-lg" />Send Email
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Mostofa Kabir</td>
                                    <td>
                                        <span className="flex items-center">
                                            <FaBookmark className="text-blue-500 mr-1.5" /> Admin
                                        </span>
                                    </td>
                                    <td>
                                        <a href="mailto:" className="flex items-center">
                                            <FaEnvelope className="mr-2 text-lg" />Send Email
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">MD. Asadujjaman</td>
                                    <td>
                                        <span className="flex items-center">
                                            <FaBookmark className="text-blue-500 mr-1.5" /> Admin
                                        </span>
                                    </td>
                                    <td>
                                        <a href="mailto:" className="flex items-center">
                                            <FaEnvelope className="mr-2 text-lg" />Send Email
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Shariar Mehedi</td>
                                    <td>
                                        <span className="flex items-center">
                                            <FaBookmark className="text-blue-500 mr-1.5" /> Admin
                                        </span>
                                    </td>
                                    <td>
                                        <a href="mailto:" className="flex items-center">
                                            <FaEnvelope className="mr-2 text-lg" />Send Email
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="font-semibold">Nashtarin Nur</td>
                                    <td>
                                        <span className="flex items-center">
                                            <FaBookmark className="text-blue-500 mr-1.5" /> Admin
                                        </span>
                                    </td>
                                    <td>
                                        <a href="mailto:" className="flex items-center">
                                            <FaEnvelope className="mr-2 text-lg" />Send Email
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminsSection;