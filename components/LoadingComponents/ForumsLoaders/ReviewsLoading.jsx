import React from 'react';
import Styles from '../../../styles/Home.module.css';

const ReviewsLoading = () => {
    return (
        <>
            <div className="bg-white dark:bg-slate-800">
                <div className='container mx-auto'>
                    <div className="rounded bg-slate-400 h-10 w-44 dark:bg-slate-500 animate-pulse"></div>
                    <div className="grid grid-cols-1 gap-10 pt-3">
                        <div className="animate-pulse bg-slate-100 dark:bg-[#37465b] p-5 grid grid-rows-1 rounded-lg card-single">
                            <div className="py-2 flex justify-start">
                                <div className="py-2 pr-5">
                                    <div className="rounded-full bg-slate-400 h-16 w-16 dark:bg-slate-500 animate-pulse"></div>
                                </div>
                                <div className="py-2 flex flex-col-reverse justify-center">
                                    <div className="h-2 bg-slate-400 rounded dark:bg-slate-500 w-40 animate-pulse my-3"></div>
                                    <div className="h-2 bg-slate-400 rounded dark:bg-slate-500 w-44 animate-pulse"></div>
                                </div>
                            </div>
                            <div className={Styles.imgContainer}>
                                <div className="rounded bg-slate-400 h-20 w-500 dark:bg-slate-500"></div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between items-center pt-5">
                                <div className="space-y-3">
                                    <div className="grid grid-cols-8 gap-4">
                                        <div className="h-2 w-20 bg-slate-400 dark:bg-slate-500 rounded col-span-2"></div>
                                        <div className="h-2 bg-slate-400 dark:bg-slate-500 rounded col-span-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewsLoading;