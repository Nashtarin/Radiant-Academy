import React from 'react';
import DashboardSidebar from './DashboardSidebar';

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
                </div>
            </div>
        </div>
    );
};

export default DashboardSection;