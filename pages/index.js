import Head from "next/head";
import QuizSection from "../components/HomeComponents/QuizSection";
import Slider from "../components/HomeComponents/Slider";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Radiant Academy</title>
        <meta name="Your learning partner" content="Best learning app for the curious learners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HOMEPAGE CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}

      <Slider />
      <QuizSection />

    </div>
  )
}
