import React from 'react';
import Styles from '../../styles/Home.module.css';

const CoursesLoading = () => {
    return (
        <>
            <div className="bg-white dark:bg-slate-800">
                <div className='container mx-auto'>
                    {/* <div className="grid grid-cols-4 gap-8 m-4">
                        {
                            [1,2,3,4].map((i) => (
                                <div key={i} className="border border-blue-300 dark:border-rose-500 shadow rounded-md p-4 max-w-sm w-full mx-auto dark:bg-[#37465b]">
                                    <div className="animate-pulse flex space-x-4">
                                        <div className="rounded-full bg-slate-400 h-10 w-10 dark:bg-slate-500"></div>
                                        <div className="flex-1 space-y-6 py-1">
                                        <div className="h-2 bg-slate-400 rounded dark:bg-slate-500"></div>
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
                    </div> */}

                    <div className="grid grid-cols-4 gap-10 pt-12">
                        {
                            [1,2,3,4].map((i) => (
                                <div key={i} className="animate-pulse bg-slate-100 dark:bg-[#37465b] p-5 grid grid-rows-1 rounded-lg card-single">
                                    <div className={Styles.imgContainer}>
                                        <div className="rounded bg-slate-400 h-20 w-500 dark:bg-slate-500"></div>
                                    </div>
                                    <div className="my-4">
                                        <h4 className="h-2 bg-slate-400 rounded dark:bg-slate-500"></h4>
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-2 bg-slate-400 dark:bg-slate-500 rounded col-span-2 my-3"></div>
                                                <div className="h-2 bg-slate-400 dark:bg-slate-500 rounded col-span-1 my-3"></div>
                                            </div>
                                            <div className="h-2 bg-slate-400 dark:bg-slate-500 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-between items-center pt-5">
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-2 w-20 bg-slate-400 dark:bg-slate-500 rounded col-span-2"></div>
                                                <div className="h-2 bg-slate-400 dark:bg-slate-500 rounded col-span-1"></div>
                                            </div>
                                            <div className="h-2 bg-slate-400 dark:bg-slate-600 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="grid grid-cols-4 gap-10 py-12">
                        {
                            [1,2,3,4].map((i) => (
                                <div key={i} className="animate-pulse bg-slate-100 dark:bg-[#37465b] p-5 grid grid-rows-1 rounded-lg card-single">
                                    <div className={Styles.imgContainer}>
                                        <div className="rounded bg-slate-400 h-20 w-500 dark:bg-slate-500"></div>
                                    </div>
                                    <div className="my-4">
                                        <h4 className="h-2 bg-slate-400 rounded dark:bg-slate-500"></h4>
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-2 bg-slate-400 dark:bg-slate-500 rounded col-span-2 my-3"></div>
                                                <div className="h-2 bg-slate-400 dark:bg-slate-500 rounded col-span-1 my-3"></div>
                                            </div>
                                            <div className="h-2 bg-slate-400 dark:bg-slate-500 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row justify-between items-center pt-5">
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-2 w-20 bg-slate-400 dark:bg-slate-500 rounded col-span-2"></div>
                                                <div className="h-2 bg-slate-400 dark:bg-slate-500 rounded col-span-1"></div>
                                            </div>
                                            <div className="h-2 bg-slate-400 dark:bg-slate-600 rounded"></div>
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

export default CoursesLoading;