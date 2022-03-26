import React from 'react';

const ForumsLoading = () => {
    return (
        <>
            <div className="bg-white dark:bg-slate-800 animate-pulse">
                <div className='container mx-auto'>
                    <div className='bg-white dark:bg-slate-800 py-10 flex justify-center'>
                        <h2 className='h-2 bg-slate-400 rounded dark:bg-slate-500 w-2/5 text-center'></h2>
                    </div>

                    <div className="shadow rounded-md p-4 w-3/5 mx-auto dark:bg-[#37465b] bg-slate-400 mb-10"></div>

                    <div className='bg-white dark:bg-slate-800 py-10 flex justify-center'>
                        <h2 className='h-2 bg-slate-400 rounded dark:bg-slate-500 w-1/5 text-center'></h2>
                    </div>
                    <div className="grid grid-cols-3 gap-5">
                        {
                            [1,2,3,4,5,6].map((i) => (
                                <div key={i} className="border border-slate-200 dark:border-slate-600 shadow rounded-md p-4 w-full mx-auto dark:bg-[#37465b]">
                                    <div className="flex space-x-4">
                                        <div className="rounded-full bg-slate-400 h-10 w-10 dark:bg-slate-500"></div>
                                        <div className="flex-1 space-y-6 py-1">
                                        <div className="h-2 bg-slate-400 rounded dark:bg-slate-500 w-40"></div>
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4">
                                            <div className="h-2 bg-slate-400 dark:bg-slate-500 rounded col-span-2"></div>
                                            <div className="h-2 bg-slate-400 dark:bg-slate-500 rounded col-span-1"></div>
                                            </div>
                                            <div className="h-2 bg-slate-400 dark:bg-slate-500 rounded"></div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className='bg-white dark:bg-slate-800 pt-20 pb-10 flex justify-center'>
                        <h2 className='h-2 bg-slate-400 rounded dark:bg-slate-500 w-1/4 text-center'></h2>
                    </div>
                    <div className="grid grid-cols-1 gap-7 pb-10">
                        {
                            [1,2,3,4,5,6].map((i) => (
                                <div key={i} className="border border-slate-200 dark:border-slate-600 shadow rounded-md p-4 w-full mx-auto dark:bg-[#37465b]">
                                    <div className="flex space-x-4">
                                        <div className="flex-1 space-y-6 py-1">
                                        <div className="h-2 bg-slate-400 rounded dark:bg-slate-500 w-2/5"></div>
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4">
                                            <div className="h-2 bg-slate-400 dark:bg-slate-500 rounded col-span-2"></div>
                                            </div>
                                            <div className="h-2 bg-slate-400 dark:bg-slate-500 rounded w-3/5"></div>
                                            <div className="h-2 bg-slate-400 dark:bg-slate-500 rounded w-1/5"></div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForumsLoading;