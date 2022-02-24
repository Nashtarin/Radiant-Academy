import React from 'react';
import {
    BsFillClockFill,
    BsArrowRight
} from "react-icons/bs";
import Link from 'next/link';
import moment from 'moment';

const BlogCard = ({ forum }) => {
    const { no, title, desc, date, category, loves, views } = forum;

    return (
        <div className='grid grid-rows-1 sm:grid-cols-3 my-5 mx-5 bg-slate-100 rounded-md shadow-md'>
            <div className='col-span-2 px-4 sm:px-8'>
                <h1 className='text-2xl font-bold text-violet-800 mt-4'>
                    {title}
                </h1>
                <h3 className="text-md mb-2 text-stone-400">
                    author
                </h3>
                <p className='text-slate-500 text-[1.1em]'>
                    description
                </p>
                <div className='w-5/6'>
                    <div className='grid sm:grid-rows-2 gap-y-1 lg:grid-cols-1 pt-3'>
                        <div>
                            <p className='flex items-center font-semibold text-slate-700'>
                                <span className='my-auto mr-1.5'><BsFillClockFill /></span> {moment(date).fromNow()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-2 sm:col-span-1 py-5 ps-12 sm:pr-8 flex justify-center sm:justify-end items-center'>
                <Link href="{url}" passHref>
                    <button className='rounded-3xl bg-yellow-500 text-black font-semibold py-2 px-6 hover:bg-slate-700 hover:text-white duration-300 inline-flex items-center justify-center'>
                        Read More <BsArrowRight className='ml-1' />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;