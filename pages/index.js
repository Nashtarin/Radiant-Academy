import Head from "next/head";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../utilities/redux/slices/userSlice";
import PackageSection from "../components/HomeComponents/PackageSection";
import QuizSection from "../components/HomeComponents/QuizSection";
import HeroSection from "../components/HomeComponents/HeroSection";
import TalentSection from "../components/HomeComponents/TalentSection";
import TestimonialSection from "../components/HomeComponents/TestimonialSection";
import FeatureSection from "../components/HomeComponents/FeatureSection";
import CounterSection from "../components/HomeComponents/CounterSection";
import PrivacyPolicySection from "../components/HomeComponents/PrivacyPolicySection";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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
    </div>
  );
};

export default Home;