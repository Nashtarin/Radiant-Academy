import React, { useEffect, useState } from 'react';
import forum from "../../utilities/FakeData/forum.json";
import TopicCard from './TopicCard';

const FeaturedTopicSection = () => {
    const [forumData, isForumData] = useState([]);

    useEffect(() => {
        isForumData(forum);
    }, [])

    return (
        <section className='container mx-auto mt-[8.5rem] pb-20 px-2 lg:px-4'>
            <h1 className='text-5xl font-bold text-center mb-10 text-violet-800 px-2'>Featured Topics</h1>
            <div className="py-5">
                {
                    forumData.map(forum => <TopicCard
                        key={forum.no}
                        forum={forum}
                    />)
                }
            </div>
        </section>
    );
};

export default FeaturedTopicSection;