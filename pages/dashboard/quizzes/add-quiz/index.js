import Head from 'next/head';
import React from 'react';
import AddNewQuiz from '../../../../components/DashboardComponents/AddNewQuiz';

const index = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Add Quiz</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AddNewQuiz />
        </div>
    );
};

export default index;