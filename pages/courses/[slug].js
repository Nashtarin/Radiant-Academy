import Head from "next/head";
import CourseDetailsSection from "../../components/CourseComponents/CourseDetailsSection";
import Script from 'next/script';

const Courses = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Course Description</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Script src="https://kit.fontawesome.com/9dbb72da13.js" />

            {/* COURSES CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <CourseDetailsSection />
        </div>
    );
};

export default Courses;