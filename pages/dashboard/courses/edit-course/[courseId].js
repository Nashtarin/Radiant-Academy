/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import Script from 'next/script';
import EditCourse from "../../../../components/DashboardComponents/EditCourse";

const EditCoursePage = ({ course }) => {
    return (
        <div className="bg-white dark:bg-slate-800">
            <Head>
                <title>Radiant Academy | Edit Course</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Script src="https://kit.fontawesome.com/9dbb72da13.js" />

            <EditCourse course={course.data} />

        </div>
    );
};

export async function getServerSideProps({ params }) {
    const res = await fetch(`http://localhost:3000/api/courses/${params.courseId}`)
    const course = await res.json()

    return { props: { course } }
}

export default EditCoursePage;