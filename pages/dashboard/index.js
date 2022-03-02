import Head from 'next/head';
import React from 'react';
import DashboardSection from '../../components/DashboardComponents/DashboardSection';

const index = () => {
    return (
        <div className='bg-white dark:bg-slate-800'>
            <Head>
                <title>Radiant Academy | Dashboard</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* COURSES CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <DashboardSection />
        </div>
    );
};

export default index;