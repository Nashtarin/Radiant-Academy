import React from 'react';
import {
    BsEyeFill,
    BsFillClockFill,
    BsHash,
    BsHeartFill,
    BsPencil,
    BsSearch,
    BsUmbrella
  } from "react-icons/bs";

const TopicCard = ({ forum }) => {
    const { no, title, desc, date, category, loves, views } = forum;
    return (
        <div className='grid grid-cols-3 my-5 py-5 mx-5 bg-slate-100 rounded-md'>
            <div className='col-span-2 mx-5'>
            <h1 className='text-2xl font-bold text-violet-800 my-2'>{title}</h1>
            <p className='text-slate-500'>{desc}</p>
            <div className='flex-auto md:space-x-10 my-2'>
                <h1 className='inline-flex font-semibold text-slate-700 mr-5'> <span className='my-auto mr-1'><BsFillClockFill/></span> {date}</h1>
                <h1 className='inline-flex font-semibold text-slate-700 mr-5'><span className='my-auto mr-1'><BsHash/></span>{category}</h1>
                <h1 className='inline-flex font-semibold text-slate-700 mr-5'><span className='my-auto mr-1'><BsEyeFill/></span>{views}</h1>
                <h1 className='inline-flex font-semibold text-slate-700 mr-5'><span className='my-auto mr-1 text-rose-500'><BsHeartFill/></span>{loves}</h1>
            </div>
            </div>
            <div className='my-auto text-center'>
            <button className='rounded-3xl bg-yellow-500 text-white font-semibold p-2 hover:bg-slate-700 duration-300 inline-flex px-4'>
                Read More 
            </button>
            </div>
        </div>
    );
};

export default TopicCard;