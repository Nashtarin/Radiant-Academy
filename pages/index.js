import Head from "next/head";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCourses } from "../utilities/redux/slices/courseSlice";
import PriceCart from "../components/HomeComponents/PriceCart";
import QuizSection from "../components/HomeComponents/QuizSection";
import SliderSection from "../components/HomeComponents/Slider";
import Talenthunt from "../components/HomeComponents/Talenthunt";
import Testimonial from "../components/Testimonial/Testimonial";
import Remotefeatures from "../components/HomeComponents/Remotefeatures";
// import { useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div>
      <Head>
        <title>Radiant Academy</title>
        <meta name="Your learning partner" content="Best learning app for the curious learners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HOMEPAGE CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}

      <SliderSection />
      <Remotefeatures/>
      <Talenthunt />
      <QuizSection />
      <PriceCart/>
      <Testimonial />


    </div>
  )
}
