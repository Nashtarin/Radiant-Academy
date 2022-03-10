import Head from "next/head";
import CourseDetailsSection from "../../components/CourseComponents/CourseDetailsSection";
import Script from 'next/script';

const Courses = ({ course }) => {

    return (
        <div>
            <Head>
                <title>Radiant Academy | Course Description</title>
                <meta name="Your learning partner" content="Best learning app for the curious learners" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Script src="https://kit.fontawesome.com/9dbb72da13.js" />

            {/* COURSES CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
            <CourseDetailsSection course={course} />
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
    // params contains the forum `id`.
    // If the route is like /forums/1, then params.id is 1
    const res = await fetch(`http://localhost:3000/api/courses/${params.courseId}`)
    const course = await res.json()

    // Pass forum data to the page via props
    return { props: { course } }
}


// export async function getStaticPaths() {
//     const res = await fetch('http://localhost:3000/api/courses')
//     const courses = await res.json()

//     const paths = courses.data.map((course) => ({
//         params: { courseId: course._id.toString() },
//     }))

//     return { paths, fallback: false }
// }

// export async function getServerSideProps({ params }) {
//     const res = await fetch(`http://localhost:3000/api/courses/${params.courseId}`)
//     const course = await res.json()

//     return { props: { course } }
// }

export default Courses;