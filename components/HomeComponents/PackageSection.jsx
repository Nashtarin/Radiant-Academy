import React from 'react';
import Link from 'next/link';

const PackageSection = () => {
    return (
        <div>
            <div className="w-5/6 xl:w-3/5 mx-auto" >
                <div className="text-center my-10">
                    <h1 className="font-bold text-violet-800 text-4xl py-7">Take the best Package</h1>
                </div>

                <div className="flex flex-col md:flex-row px-2 md:px-0">
                    <div className="w-full md:w-1/3 rounded-lg bg-slate-100 shadow hover:shadow-xl hover:bg-slate-200 transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
                        <h3 className="text-gray-700  text-xl font-bold text-center ">FREE</h3>
                        <p className="text-sm text-gray-600 mt-2 py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum ipsam dicta temporibus possimus voluptatibus?</p>
                        <ol className="text-sm text-gray-600 mt-4 ml-3 list-decimal">
                            <li className="my-2 ml-2">Full free of cost</li>
                            <li className="my-2 ml-2">10 quiz per topic</li>
                            <li className="my-2 ml-2">Browse Forum</li>
                            <li className="my-2 ml-2 text-slate-400 line-through">Vote Solution</li>
                            <li className="my-2 ml-2 text-slate-400 line-through">suggest Courses</li>
                        </ol>
                        <Link passHref href="/register">
                            <button className="w-full text-white font-bold bg-rose-500 border rounded-lg hover:bg-slate-700 hover:text-white hover:shadow-xl transition duration-300 ease-in-out py-3 mt-4">Try it out</button>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/3  rounded-lg bg-slate-100 shadow hover:shadow-xl hover:bg-slate-200 transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
                        <h3 className="text-gray-700 text-xl font-bold text-center">PRO</h3>
                        <p className="text-sm text-gray-600 mt-2 py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum ipsam dicta temporibus possimus voluptatibus?</p>
                        <ol className="text-sm text-gray-600 mt-4 ml-3 list-decimal">
                            <li className="my-2 ml-2">One month Free Trial</li>
                            <li className="my-2 ml-2">15 quiz per topic</li>
                            <li className="my-2 ml-2">Browse Forum</li>
                            <li className="my-2 ml-2">Vote Solution</li>
                            <li className="my-2 ml-2 text-slate-400 line-through">suggest Courses</li>
                        </ol>
                        <Link passHref href="/register">
                            <button className="w-full text-white font-bold bg-rose-500 border rounded-lg hover:bg-slate-700 hover:text-white hover:shadow-xl transition duration-300 ease-in-out py-3 mt-4">Try it out</button>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/3  rounded-lg bg-slate-100 shadow hover:shadow-xl hover:bg-slate-200 transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
                        <h3 className="text-gray-700 text-xl font-bold text-center">SUPER PRO</h3>
                        <p className="text-sm text-gray-600 mt-2 py-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum ipsam dicta temporibus possimus voluptatibus?</p>
                        <ol className="text-sm text-gray-600 mt-4 ml-3 list-decimal">
                            <li className="my-2 ml-2">One month Free Trial</li>
                            <li className="my-2 ml-2">25 quiz per topic</li>
                            <li className="my-2 ml-2">Browse Forum</li>
                            <li className="my-2 ml-2 ">Vote Solution</li>
                            <li className="my-2 ml-2 ">suggest Courses</li>
                        </ol>
                        <Link passHref href="/register">
                            <button className="w-full text-white font-bold bg-rose-500 border rounded-lg hover:bg-slate-700 hover:text-white hover:shadow-xl transition duration-300 ease-in-out py-3 mt-4">Try it out</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageSection;
