import React, { useEffect, useState } from 'react';
import forum from "../../utilities/FakeData/forum.json";
import TopicCard from './TopicCard';

const FeaturedTopicSection = () => {
    const [forumData, isForumData] = useState([]);
    useEffect(() => {
        isForumData(forum);
    }, [])

    return (
        <section className='container mx-auto mt-10'>
            <h1 className='text-5xl font-bold text-center mt-20 mb-5 text-violet-800'>Featured Topic</h1>
            {
                forumData.map(forum => <TopicCard
                    key={forum.no}
                    forum={forum}
                />)
            }
        </section>
    );
};

export default FeaturedTopicSection;