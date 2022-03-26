import Head from 'next/head';
import React from 'react';
import VoteNewCourses from '../../components/VoteComponents/VoteNewCourses';

const index = () => {
    return (
        <div className='bg-white dark:bg-slate-800'>
            <Head>
                <title>Radiant Academy | Vote</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <VoteNewCourses />
        </div>
    );
};

export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/vote')
    const vote = await res.json()
    return {
        props: {
            vote,
        }
    }
}

export default index;