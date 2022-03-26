import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import VoteLoading from '../../components/LoadingComponents/VoteLoaders/VoteLoading';
import VoteNewCourses from '../../components/VoteComponents/VoteNewCourses';
import { fetchVotes } from '../../utilities/redux/slices/voteSlice';

const Vote = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(dispatch(fetchVotes())){
            setLoading(false);
        }
    }, [dispatch]);

    return (
        <div className='bg-white dark:bg-slate-800'>
            <Head>
                <title>Radiant Academy | Vote</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {
                loading ? <VoteLoading /> : <VoteNewCourses />
            }
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

export default Vote;