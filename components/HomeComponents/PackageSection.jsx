import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";

const PackageSection = () => {
    return (
        <div className='bg-white dark:bg-slate-800'>
            <div className="w-5/6 xl:w-3/5 mx-auto pt-10" >
                <div className="text-center ">
                    <h1 className="font-bold text-violet-800 dark:text-violet-400 text-4xl py-7">Take the best Package</h1>
                </div>

                <div className="flex flex-col md:flex-row px-2 md:px-0">
                    <div className="w-full md:w-1/3 rounded-lg bg-slate-100 dark:bg-slate-700 shadow hover:shadow-xl hover:bg-slate-200 dark:hover:shadow-slate-500 transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
                        <h3 className="text-gray-700 dark:text-slate-200  text-xl font-bold text-center ">FREE</h3>
                        <h2 className='text-rose-400 font-bold text-4xl text-center py-3'>$0</h2>
                        <p className="text-sm text-gray-600 dark:text-slate-400 mt-2 py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum ipsam dicta temporibus possimus voluptatibus?</p>
                        <ol className="text-sm text-gray-600 dark:text-slate-400 mt-4 ml-3 list-decimal">
                            <li className="my-2 ml-2">Full free of cost</li>
                            <li className="my-2 ml-2">10 quiz per topic</li>
                            <li className="my-2 ml-2">Browse Forum</li>
                            <li className="my-2 ml-2 text-slate-400 dark:text-slate-500 line-through">Vote Solution</li>
                            <li className="my-2 ml-2 text-slate-400 dark:text-slate-500 line-through">suggest Courses</li>
                        </ol>
                        <Link passHref href="/register">
                            <button className="w-full text-white font-bold outline-none border-none bg-rose-500 border rounded-lg hover:bg-slate-700 hover:text-white dark:hover:bg-slate-500 hover:shadow-xl transition duration-300 ease-in-out py-3 mt-4 flex items-center justify-center">
                                Try it out &nbsp; <FaArrowRight style={{ marginTop: '2px' }} />
                            </button>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/3 rounded-lg bg-slate-200 dark:bg-slate-600 shadow hover:shadow-xl hover:bg-slate-200 dark:hover:shadow-slate-500 transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
                        <h3 className="text-gray-700 dark:text-slate-200 text-xl font-bold text-center">PRO</h3>
                        <h2 className='text-rose-500 dark:text-rose-300 font-bold text-4xl text-center py-3'>$29</h2>
                        <p className="text-sm text-gray-600 dark:text-slate-300 mt-2 py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum ipsam dicta temporibus possimus voluptatibus?</p>
                        <ol className="text-sm text-gray-600 dark:text-slate-300 mt-4 ml-3 list-decimal">
                            <li className="my-2 ml-2">One month Free Trial</li>
                            <li className="my-2 ml-2">15 quiz per topic</li>
                            <li className="my-2 ml-2">Browse Forum</li>
                            <li className="my-2 ml-2">Vote Solution</li>
                            <li className="my-2 ml-2 text-slate-400 dark:text-slate-400 line-through">suggest Courses</li>
                        </ol>
                        <Link passHref href="/register">
                            <button className="w-full text-white font-bold outline-none border-none bg-rose-500 border rounded-lg hover:bg-slate-700 hover:text-white dark:hover:bg-slate-500 hover:shadow-xl transition duration-300 ease-in-out py-3 mt-4 flex items-center justify-center">
                                Try it out &nbsp; <FaArrowRight style={{ marginTop: '2px' }} />
                            </button>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/3 rounded-lg bg-slate-100 dark:bg-slate-700 shadow hover:shadow-xl hover:bg-slate-200 dark:hover:shadow-slate-500 transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
                        <h3 className="text-gray-700 dark:text-slate-200 text-xl font-bold text-center">PRO PLUS</h3>
                        <h2 className='text-rose-400 font-bold text-4xl text-center py-3'>$49</h2>
                        <p className="text-sm text-gray-600 dark:text-slate-400 mt-2 py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum ipsam dicta temporibus possimus voluptatibus?</p>
                        <ol className="text-sm text-gray-600 dark:text-slate-400 mt-4 ml-3 list-decimal">
                            <li className="my-2 ml-2">One month Free Trial</li>
                            <li className="my-2 ml-2">25 quiz per topic</li>
                            <li className="my-2 ml-2">Browse Forum</li>
                            <li className="my-2 ml-2 ">Vote Solution</li>
                            <li className="my-2 ml-2 ">suggest Courses</li>
                        </ol>
                        <Link passHref href="/register">
                            <button className="w-full text-white font-bold outline-none border-none bg-rose-500 border rounded-lg hover:bg-slate-700 hover:text-white dark:hover:bg-slate-500 hover:shadow-xl transition duration-300 ease-in-out py-3 mt-4 flex items-center justify-center">
                                Try it out &nbsp; <FaArrowRight style={{ marginTop: '2px' }} />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageSection;
