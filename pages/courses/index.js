import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CourseSection from "../../components/CourseComponents/CourseSection";
import CoursesLoader from "../../components/LoadingComponents/CoursesLoader";
import { fetchCourses } from "../../utilities/redux/slices/courseSlice";

const Courses = () => { 
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(dispatch(fetchCourses())){
        setLoading(true);
    }
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div>
      <Head>
        <title>Radiant Academy | Courses</title>
        <meta name="Your learning partner" content="Best learning app for the curious learners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* COURSES CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
      {
        !loading ? <CoursesLoader/> : <CourseSection />
      }
    </div>
  );
};

export default Courses;