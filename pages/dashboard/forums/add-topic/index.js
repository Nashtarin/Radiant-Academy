import Head from 'next/head';
import React from 'react';
import AddNewTopic from '../../../../components/DashboardComponents/AddNewTopic';

const DashAddTopic = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Add Topic</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* COURSES CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <AddNewTopic />
        </div>
    );
};

export default DashAddTopic;