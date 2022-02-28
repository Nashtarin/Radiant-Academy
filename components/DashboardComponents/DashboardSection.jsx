import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import { FaInfoCircle, FaEdit, FaEnvelope, FaPhoneSquareAlt, FaBookmark, FaIdCardAlt, FaArrowRight } from 'react-icons/fa'

const DashboardSection = () => {
    return (
        <div className="px-0 sm:px-6 lg:px-12">
            <div className="grid grid-rows-1 md:grid-cols-[250px_minmax(300px,_1fr)] lg:grid-cols-[250px_minmax(600px,_1fr)] m-8 gap-5">
                <div>
                    <DashboardSidebar />
                </div>

                <div className="bg-slate-100 shadow-md rounded-md py-8 px-5 h-auto">
                    <div className="rounded-md p-5 text-white" style={{ backgroundColor: '#32007E' }}>
                        <h5 className="text-lg">Site Overview</h5>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 pb-1 px-4">
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200">
                                <h3 className="text-2xl">23</h3>
                                <p>Pending Submissions</p>
                            </div>
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200">
                                <h3 className="text-2xl">768</h3>
                                <p>Submissions</p>
                            </div>
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200">
                                <h3 className="text-2xl">1.5k+</h3>
                                <p>Total Accounts</p>
                            </div>
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200">
                                <h3 className="text-2xl">588</h3>
                                <p>Subscribers</p>
                            </div>
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200">
                                <h3 className="text-2xl">20</h3>
                                <p>Total Courses</p>
                            </div>
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200">
                                <h3 className="text-2xl">100</h3>
                                <p>Total Quizes</p>
                            </div>
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200">
                                <h3 className="text-2xl">815</h3>
                                <p>Forum Posts</p>
                            </div>
                            <div className="flex flex-col items-start border-r-2 mb-2 border-r-zinc-200">
                                <h3 className="text-2xl">623</h3>
                                <p>Total Reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-1 md:grid-cols-[300px_minmax(200px,_1fr)] lg:grid-cols-[350px_minmax(400px,_1fr)] gap-5 mt-5">
                        <div>
                            <div className="bg-slate-200 shadow-md rounded-md p-5 h-auto mb-5">
                                <h2>hello</h2>
                            </div>
                            <div className="bg-slate-200 shadow-md rounded-md p-5 h-auto mb-5">
                                <div className="flex items-center justify-between" style={{ color: '#32007E' }}>
                                    <div className="flex items-center">
                                        <FaInfoCircle className="mr-2 text-lg" />
                                        <h5 className="text-lg font-semibold">Account Info</h5>
                                    </div>
                                    <button className="px-4 py-1.5 hover:bg-stone-100 rounded-lg flex items-center"><FaEdit className="mr-2" /> Edit</button>
                                </div>
                                <div className="border-[1px] border-stone-300 my-2"></div>
                                <table className="table-compact">
                                    <tbody>
                                        <tr>
                                            <td className="flex items-center">
                                                <FaIdCardAlt /> &nbsp; Name
                                            </td>
                                            <td>:&nbsp; Radiant Admin</td>
                                        </tr>
                                        <tr>
                                            <td className="flex items-center">
                                                <FaBookmark /> &nbsp; Role
                                            </td>
                                            <td>:&nbsp; Admin</td>
                                        </tr>
                                        <tr>
                                            <td className="flex items-center">
                                                <FaPhoneSquareAlt classNAme="mr-2" /> &nbsp; Phone
                                            </td>
                                            <td>:&nbsp; +880 123456</td>
                                        </tr>
                                        <tr>
                                            <td className="flex items-center">
                                                <FaEnvelope classNAme="mr-2" /> &nbsp; Email
                                            </td>
                                            <td>:&nbsp; info@radiantacademy.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="flex justify-end mt-3">
                                    <button className="text-sm flex items-center px-4 py-1 rounded-full hover:bg-stone-100" style={{ color: '#32007E' }}>See More Info <FaArrowRight className="ml-2 text-[10px] text-red-600" /></button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="bg-slate-200 shadow-md rounded-md p-5 h-auto mb-5">
                                <h2>hello</h2>
                            </div>
                            <div className="bg-slate-200 shadow-md rounded-md p-5 h-auto mb-5">
                                <h2>hello</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardSection;