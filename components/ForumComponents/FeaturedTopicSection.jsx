import React from 'react';
import TopicCard from './TopicCard';

const FeaturedTopicSection = ({forums}) => {

    return (
        <section className='container mx-auto mt-[8.5rem] pb-20 px-2 lg:px-4'>
            <h1 className='text-5xl font-bold text-center mb-10 text-violet-800 px-2'>Featured Topics</h1>
            {
                forums.data.map(forum => <TopicCard
                    key={forum._id}
                    forum={forum}
                />)
            }
        </section>
    );
};

export default FeaturedTopicSection;