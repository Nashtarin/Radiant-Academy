import Head from "next/head";
import { useEffect } from "react";
import CourseSection from "../../components/CourseComponents/CourseSection";

// export const getServerSideProps = async () => {
//     const url = 'https://api.itbook.store/1.0/new';
//     const res = await fetch(url);
//     const data = await res.json();

//     return {
//         props: {
//             courses: data.books
//         }
//     }
// }

const Courses = () => {
  return (
    <div>
      <Head>
        <title>Radiant Academy | Courses</title>
        <meta name="Your learning partner" content="Best learning app for the curious learners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* COURSES CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
      <CourseSection/>

    </div>
  );
};

export default Courses;
