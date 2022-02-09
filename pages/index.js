import Head from "next/head";
import Talenthunt from "../components/HomeComponents/Talenthunt";
import QuizSection from "../components/HomeComponents/QuizSection";
import SliderSection from "../components/HomeComponents/Slider";
import Testimonial from "../components/Testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Radiant Academy</title>
        <meta name="Your learning partner" content="Best learning app for the curious learners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HOMEPAGE CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}

      <SliderSection />
      <Talenthunt />
      <Testimonial />
    </div>
  )
}
