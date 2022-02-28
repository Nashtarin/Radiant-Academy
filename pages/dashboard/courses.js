import React from 'react';
import Head from 'next/head';
import CoursesSection from '../../components/DashboardComponents/CoursesSection';

const index = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Courses</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* COURSES CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <CoursesSection />
        </div>
    );
};

export default index;