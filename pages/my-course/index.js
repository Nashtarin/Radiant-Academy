import React from 'react';
import Head from 'next/head';
import MyCourseSection from '../../components/MyCourseComponents/MyCourseSection';

const index = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | My Course</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <MyCourseSection />
        </div>
    );
};

export default index;