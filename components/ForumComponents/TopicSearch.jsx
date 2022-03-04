import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import Link from 'next/link';

const TopicSearch = () => {
    const [searchTerm, setSearchTerm] = useState("All");


    return (
        <section className='container mx-auto'>
            <form className='input-group justify-center'>
                <input
                    type="search"
                    className='py-2 px-4 w-4/6 sm:w-2/3 md:w-2/4 lg:2/5 focus:outline-none border rounded-sm'
                    placeholder="Let's find out your interested topic/blog"
                    aria-label="Search"
                    required
                    onChange={event => setSearchTerm(event.target.value)}
                />
                <Link href={`/forum/find-topic/${searchTerm}`} passHref>
                    <button className="btn border-0 px-7 py-2 rounded bg-rose-500 text-white transition duration-500 text-xl font-bold">
                        <BsSearch />
                    </button>
                </Link>
            </form>
        </section>
    );
};

export default TopicSearch;