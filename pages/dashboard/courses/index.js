import Head from 'next/head';
import React from 'react';
import CoursesSection from '../../../components/DashboardComponents/CourseSection';

const DashCourses = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Courses</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* DASHBOARD COURSES CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <CoursesSection />
        </div>
    );
};

export default DashCourses;