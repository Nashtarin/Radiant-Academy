import Head from "next/head";
import CourseSection from "../../components/CourseComponents/CourseSection";

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