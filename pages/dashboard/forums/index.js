import Head from 'next/head';
import React from 'react';
import ForumSection from '../../../components/DashboardComponents/ForumSection';

const index = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Forums Dashboard</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* COURSES CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <ForumSection />
        </div>
    );
};

export default index;