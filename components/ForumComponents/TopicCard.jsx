import React from 'react';
import {
    BsEyeFill,
    BsFillClockFill,
    BsHash,
    BsHeartFill,
    BsArrowRight
} from "react-icons/bs";
import Link from 'next/link';
import moment from 'moment';

const TopicCard = ({ forum }) => {
    const { _id, title, desc, createdAt, category, loves, views } = forum;

    return (
        <div className='grid grid-rows-1 sm:grid-cols-3 my-5 mx-5 bg-slate-100 rounded-md shadow-md'>
            <div className='col-span-2 px-4 sm:px-8'>
                <h1 className='text-2xl font-bold text-violet-800 my-2'>{title}</h1>
                <p className='text-slate-500'>{desc.split(' ').slice(0, 40).toString().replace(/,/g, ' ')}...</p>
                <div className='w-5/6'>
                    <div className='grid sm:grid-rows-2 gap-y-1 lg:grid-cols-2 pt-3'>
                        <div>
                            <p className='flex items-center font-semibold text-slate-700'>
                                <span className='my-auto mr-1.5'><BsFillClockFill /></span> {moment(createdAt).fromNow()}
                            </p>
                        </div>
                        <div className='grid grid-cols-3'>
                            <p className='flex items-center font-semibold text-slate-700 mr-5'>
                                <span className='my-auto'><BsHash /></span>{category}
                            </p>
                            <p className='flex justify-center items-center font-semibold text-slate-700 mr-5'>
                                <span className='my-auto mr-1'><BsEyeFill /></span>{views}
                            </p>
                            <p className='flex items-center font-semibold text-slate-700 mr-5'>
                                <span className='my-auto mr-1 text-rose-500'><BsHeartFill /></span>{loves}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-2 sm:col-span-1 pt-5 ps-12 sm:pr-8 flex justify-center sm:justify-end items-center'>
                <Link href={`/forum/${_id}`} passHref>
                    <button className='rounded-3xl bg-yellow-500 text-black font-semibold py-2 px-6 hover:bg-slate-700 hover:text-white duration-300 inline-flex items-center justify-center'>
                        Read More <BsArrowRight className='ml-1' />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default TopicCard;