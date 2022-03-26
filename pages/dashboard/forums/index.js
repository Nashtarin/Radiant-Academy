import Head from 'next/head';
import React from 'react';
import ForumSection from '../../../components/DashboardComponents/ForumSection';

const DashForums = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Forums Dashboard</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* DASHBOARD FORUMS CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <ForumSection />
        </div>
    );
};

export default DashForums;