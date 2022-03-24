import React from 'react';
import { useSelector } from 'react-redux';
import TopicCard from './TopicCard';
import Link from 'next/link';
import {
  BsPencil
} from "react-icons/bs";

const RelatedTopicSection = ({forum}) => {
    const allTopic = useSelector((state) => state.forums.forumsList);

    const relatedList = allTopic.filter(related => {
        if (forum.category.toLowerCase() === related.category.toLowerCase() && forum._id !== related._id && related.status !== false) {
            return related;
        }
    }).map(related => <TopicCard
        key={related._id}
        forum={related}
    />)

    return (
        <>
            {
                relatedList.length > 0 ? <section className='container mx-auto mt-[8.5rem] pb-20 px-2 lg:px-4'>
                                            <h1 className='text-4xl font-bold text-center mb-10 text-slate-800 px-2 dark:text-white'>Topics you may also like</h1>
                                            {relatedList}
                                        </section>
                                        :
                                        <section className="container mx-auto py-20 px-2 lg:px-4">
                                            <h6 className="text-2xl text-center mb-10 text-slate-500 dark:text-white pl-6">No related topics found!
                                                <span>
                                                    <Link href="/forum/create-topic" passHref>
                                                        <button className='rounded-md bg-rose-500 text-white font-semibold ml-5 px-4 py-2 hover:bg-slate-700 duration-300 inline-flex text-lg'>
                                                            Contribute Now! <span className='ml-2 mt-1'><BsPencil /></span>
                                                        </button>
                                                    </Link>    
                                                </span>
                                            </h6>
                                            
                                        </section>
            }
        </>
    );
};

export default RelatedTopicSection;