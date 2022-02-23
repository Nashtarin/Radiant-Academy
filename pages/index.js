import Head from "next/head";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCourses } from "../utilities/Redux/slices/courseSlice";
import PackageSection from "../components/HomeComponents/PackageSection";
import QuizSection from "../components/HomeComponents/QuizSection";
import HeroSection from "../components/HomeComponents/HeroSection";
import TalentSection from "../components/HomeComponents/TalentSection";
import TestimonialSection from "../components/HomeComponents/TestimonialSection";
import FeatureSection from "../components/HomeComponents/FeatureSection";
import CounterSection from "../components/HomeComponents/CounterSection";
import PrivacyPolicySection from "../components/HomeComponents/PrivacyPolicySection";
import { BsArrowUpCircleFill } from 'react-icons/bs';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  window.onscroll = (function () {
    if (window.scrollY > 10) {
      document.getElementById("sticky").classList.add("popup");
    } else {
      document.getElementById("sticky").classList.remove("popup");
    }
  });

  return (
    <div>
      <Head>
        <title>Radiant Academy</title>
        <meta name="Your learning partner" content="Best learning app for the curious learners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HOMEPAGE CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
      <HeroSection />
      <FeatureSection />
      <TalentSection />
      <QuizSection />
      <PackageSection />
      <TestimonialSection />
      <CounterSection />
      <PrivacyPolicySection />


      {/* GO TOP BUTTON */}
      {/* <button className="stickyGoToTop btn btn-ghost rounded-btn float-right m-5" id="sticky2">
        <style jsx global>
          {`
            .stickyGoToTop {
                bottom: 0px;
                -webkit-transition: bottom .2s ease-in-out;
                transition: bottom .2s ease-in-out;
            }
            .popup2 {
                bottom: calc(0px);
            }
          `}
        </style>
        <BsArrowUpCircleFill style={{ fontSize: 25 }} />
      </button> */}
    </div>
  )
}