import Head from "next/head";
import CourseDetailsSection from "../../components/CourseComponents/CourseDetailsSection";

const Courses = () => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Course Description</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* COURSES CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <CourseDetailsSection />
        </div>
    );
};

export default Courses;