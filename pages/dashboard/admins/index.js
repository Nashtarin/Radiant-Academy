import React from 'react';
import Head from 'next/head';
import AdminsSection from '../../../components/DashboardComponents/AdminsSection';

const index = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Admins</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* COURSES CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <AdminsSection />
        </div>
    );
};

export default index;