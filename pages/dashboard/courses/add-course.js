import React from 'react';
import Head from 'next/head';
import AddNewCourse from '../../../components/DashboardComponents/AddNewCourse';

const index = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Add New Course</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* COURSES CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <AddNewCourse />
        </div>
    );
};

export default index;