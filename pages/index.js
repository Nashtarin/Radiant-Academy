import Head from "next/head";
import PriceCart from "../components/HomeComponents/PriceCart";
import QuizSection from "../components/HomeComponents/QuizSection";
import SliderSection from "../components/HomeComponents/Slider";
import Talenthunt from "../components/HomeComponents/Talenthunt";
import Testimonial from "../components/Testimonial/Testimonial";
import Remotefeatures from "../components/HomeComponents/Remotefeatures";
import CounterSection from "../components/HomeComponents/CounterSection"
import AuthProvider from "../components/context/AuthProvider/AuthProvider";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Radiant Academy</title>
        <meta name="Your learning partner" content="Best learning app for the curious learners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HOMEPAGE CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
      <AuthProvider>
        <SliderSection />
        <Remotefeatures />
        <Talenthunt />
        <QuizSection />
        <PriceCart />
        <Testimonial />
        <CounterSection />
      </AuthProvider>


    </div>
  )
}
