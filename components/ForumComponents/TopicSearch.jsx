import React from 'react';
import { BsSearch } from "react-icons/bs";

const TopicSearch = () => {
    return (
        <section className='container mx-auto'>
            <h1 className='text-5xl font-bold text-center my-5 text-violet-800'>
                Welcome to our forum
            </h1>
            <div className=''>
                <div className='input-group justify-center'>
                <input type="search" className='py-2 px-4 w-2/5 focus:outline-none border rounded-sm' placeholder="Let's find out your interested topic" aria-label="Search" />
                <button className="btn border-0 px-7 py-2 rounded bg-rose-500 text-white transition duration-500 text-xl font-bold">
                    <BsSearch/>
                </button>
                </div>
            </div>
        </section>
    );
};

export default TopicSearch;