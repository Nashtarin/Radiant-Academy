import React from 'react';
import Head from 'next/head';
import AccountsSection from '../../../components/DashboardComponents/AccountsSection';

const index = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Accounts</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* COURSES CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <AccountsSection />
        </div>
    );
};

export default index;