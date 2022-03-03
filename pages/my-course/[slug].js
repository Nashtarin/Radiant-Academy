import React from 'react';
import Head from 'next/head';
import CourseContent from '../../components/MyCourseComponents/CourseContent';

const SingleCourseContent = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Course Content</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <CourseContent />
        </div>
    );
};

export default SingleCourseContent;