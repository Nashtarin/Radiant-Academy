import React from 'react';
import { BsSearch } from "react-icons/bs";

const TopicSearch = () => {
    return (
        <section className='container mx-auto'>
            <div className='input-group justify-center'>
                <input
                    type="search"
                    className='py-2 px-4 w-4/6 sm:w-2/3 md:w-2/4 lg:2/5 focus:outline-none border rounded-sm'
                    placeholder="Let's find out your interested topic/blog"
                    aria-label="Search"
                    required
                />
                <button className="btn border-0 px-7 py-2 rounded bg-rose-500 text-white transition duration-500 text-xl font-bold">
                    <BsSearch />
                </button>
            </div>
        </section>
    );
};

export default TopicSearch;