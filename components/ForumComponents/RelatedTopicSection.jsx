import React from 'react';
import { useSelector } from 'react-redux';
import TopicCard from './TopicCard';

const RelatedTopicSection = ({forum}) => {
    const allTopic = useSelector((state) => state.forums.forumsList);

    const relatedList = allTopic.filter(related => {
        if (forum.category.toLowerCase() === related.category.toLowerCase()) {
            return related;
        }
    }).map(related => <TopicCard
        key={related._id}
        forum={related}
    />)

    return (
        <section className='container mx-auto mt-[8.5rem] pb-20 px-2 lg:px-4'>
            <h1 className='text-4xl font-bold text-center mb-10 text-slate-800 px-2 dark:text-white'>Topics you may also like</h1>
            {relatedList}
        </section>
    );
};

export default RelatedTopicSection;