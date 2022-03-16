import Head from 'next/head';
import React from 'react';
import VideoSection from '../../components/VideoComponents/VideoSection';

const index = () => {
    return (
        <div className='bg-white dark:bg-slate-800'>
            <Head>
                <title>Radiant Academy | Help Line</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <VideoSection />
        </div>
    );
};

export default index;
