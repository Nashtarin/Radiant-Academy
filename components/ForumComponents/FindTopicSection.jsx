import { useRouter } from 'next/router';
import React, { useState } from 'react';
import TopicCard from './TopicCard';

const FindTopicSection = ({ forums }) => {
    const router = useRouter();
    const { searchParam } = router.query;
    const [searchTerm, setSearchTerm] = useState(searchParam);

    const searchList = forums.data.filter(forum => {
        if (searchTerm === "" || searchTerm === "All" || searchTerm === "all") {
            return forum;
        }
        else if (forum.category.toLowerCase() === searchTerm.toLowerCase()) {
            return forum;
        }
        else if (forum.title.toLowerCase().includes(searchTerm.toLowerCase()) || forum.desc.toLowerCase().includes(searchTerm.toLowerCase()) || forum.author.toLowerCase().includes(searchTerm.toLowerCase())) {
            return forum;
        }
    }).map(forum => <TopicCard
        key={forum._id}
        forum={forum}
    />)

    return (
        <>  
            <div className='bg-white dark:bg-slate-800'>
                <section className='container mx-auto  pt-[5rem]'>
                    <form className='input-group justify-center'>
                        <input
                            type="search"
                            className='py-2 px-4 w-4/6 sm:w-2/3 md:w-2/4 lg:2/5 focus:outline-none border rounded-sm'
                            placeholder="Just start typing to find your interested topic . ."
                            aria-label="Search"
                            required
                            onChange={event => setSearchTerm(event.target.value)}
                        />
                    </form>
                </section>
                <section className='container mx-auto pt-[5rem] pb-20 px-2 lg:px-4'>
                    <h4 className='text-2xl text-left mb-10text-slate-500 pl-6 text-black dark:text-white'>
                        Showing results for:
                        <span className='text-gray-500'> {searchTerm === "" ? "All" : searchTerm}</span>
                    </h4>

                    {/* Search Results here: */}
                    {searchList}

                </section>
                {
                    searchList.length ? ""
                        :
                        <section className='container mx-auto pb-20 px-2 lg:px-4'>
                            <h6 className='text-2xl text-center mb-10 text-rose-500 pl-6'>No results Found!</h6>
                        </section>
                }
            </div>
        </>
    );
};

export default FindTopicSection;