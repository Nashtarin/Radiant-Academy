import React from 'react';
import Head from 'next/head';
import CourseContent from '../../../components/MyCourseComponents/CourseContent';
import Script from 'next/script';

const SingleCourseContent = ({ course }) => {
    return (
        <div>
            <Head>
                <title>Radiant Academy | Course Content</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Script src="https://kit.fontawesome.com/9dbb72da13.js" />

            <CourseContent course={course} />
        </div>
    );
};

// // This function gets called at build time
// export async function getStaticPaths() {
//     // Call an external API endpoint to get forums
//     const res = await fetch('http://localhost:3000/api/courses')
//     const courses = await res.json()

//     // Get the paths we want to pre-render based on forums
//     const paths = courses.data.map((course) => ({
//         params: { courseId: course._id.toString() },
//     }))

//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false }
// }

export async function getServerSideProps({ params }) {
    const res = await fetch(`http://localhost:3000/api/courses/${params.courseId}`)
    const course = await res.json()

    // Pass forum data to the page via props
    return { props: { course } }
}

export default SingleCourseContent;