import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CourseSection from "../../components/CourseComponents/CourseSection";
import CoursesLoading from "../../components/LoadingComponents/CourseLoaders/CoursesLoading";
import { fetchCourses } from "../../utilities/redux/slices/courseSlice";

const Courses = () => { 
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(dispatch(fetchCourses())){
        setLoading(false);
    }
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
        loading ? <CoursesLoading/> : <CourseSection />
      }
    </div>
  );
};

export default Courses;